import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const secretKey = process.env.STRIPE_SECRET_KEY;

	/* ── Demo mode: no Stripe keys configured ── */
	if (!secretKey) {
		return NextResponse.json({
			demo: true,
			clientSecret: null,
			message: 'Stripe is not configured. Running in demo mode.',
		});
	}

	try {
		const { planType } = await request.json();

		// Dynamic import so the module isn't required when keys are missing
		const Stripe = (await import('stripe')).default;
		const stripe = new Stripe(secretKey);

		const amount = planType === 'monthly' ? 1499 : 9588; // cents

		const description = `Drift 21-Day Sleep Protocol - ${planType === 'monthly' ? 'monthly' : 'annual'} plan`;

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd',
			description,
			automatic_payment_methods: { enabled: true },
			shipping: {
				name: 'Drift Customer',
				address: {
					line1: '123 Test Street',
					city: 'San Francisco',
					state: 'CA',
					postal_code: '94105',
					country: 'US',
				},
			},
			metadata: {
				product: 'drift_21_day_protocol',
				plan_type: planType,
			},
		});

		return NextResponse.json({
			demo: false,
			clientSecret: paymentIntent.client_secret,
		});
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : 'Payment intent creation failed';
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
