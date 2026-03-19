export type SleepType = 'racing_mind' | 'low_recovery';

export interface ResultContent {
	type: SleepType;
	label: string;
	heading: string;
	subtitle: string;
	whatsHappening: string;
	protocolIncludes: { title: string; description: string }[];
}

export const resultContent: Record<SleepType, ResultContent> = {
	racing_mind: {
		type: 'racing_mind',
		label: 'Racing Mind',
		heading: "You're a Racing Mind sleeper.",
		subtitle:
			"Your brain doesn't have an off switch at night. You lie in bed while your mind races through thoughts, plans, worries, and hypotheticals. The problem isn't your body — it's your brain refusing to power down.",
		whatsHappening:
			"Your nervous system stays in 'active mode' past bedtime. This is often driven by screen stimulation, irregular schedules, and a habit of using bed as a thinking space. Melatonin won't fix this — your brain needs to be retrained to associate bed with sleep, not problem-solving.",
		protocolIncludes: [
			{
				title: 'Cognitive wind-down techniques',
				description: 'Structured thought-dumping exercises that empty your mental queue before bed',
			},
			{
				title: 'Breathwork sequences',
				description:
					'Specific patterns proven to activate your parasympathetic nervous system (the "off switch")',
			},
			{
				title: 'Stimulus control training',
				description: 'Break the association between your bed and wakefulness',
			},
			{
				title: 'Screen and caffeine timing rules',
				description: 'Personalized to your schedule',
			},
			{
				title: 'Daily sleep journal',
				description: 'Track your fall-asleep time and watch it shrink',
			},
		],
	},
	low_recovery: {
		type: 'low_recovery',
		label: 'Low Recovery',
		heading: "You're a Low Recovery sleeper.",
		subtitle:
			"You're getting the hours — but not the rest. You wake up heavy, groggy, and running on fumes no matter how early you went to bed. The problem isn't quantity. It's the quality of your sleep cycles.",
		whatsHappening:
			"Your body is likely spending too little time in deep sleep and REM — the restorative phases where your brain consolidates memory and your body repairs itself. This is often caused by evening habits, meal timing, environmental factors, or chronic low-grade stress that you've stopped noticing.",
		protocolIncludes: [
			{
				title: 'Deep sleep optimization',
				description: 'Evening routines specifically designed to increase time in restorative sleep phases',
			},
			{
				title: 'Recovery environment audit',
				description: 'Temperature, light, noise, and air quality adjustments for your space',
			},
			{
				title: 'Pre-sleep nutrition timing',
				description: 'When and what to eat (and avoid) in the 3 hours before bed',
			},
			{
				title: 'Stress baseline reset',
				description:
					'Gentle nervous system regulation techniques for people who don\'t "feel stressed" but are running on cortisol',
			},
			{
				title: 'Daily sleep journal',
				description: 'Track your morning energy and watch it climb',
			},
		],
	},
};
