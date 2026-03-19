export type QuizOption = {
	text: string;
	rm: number;
	lr: number;
};

export type QuizQuestion = {
	id: number;
	question: string;
	subtext: string;
	options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
	{
		id: 1,
		question: 'When do you actually get into bed?',
		subtext: 'Be honest — not when you plan to, when you actually do.',
		options: [
			{ text: "Before 10pm — I'm disciplined about it", rm: 0, lr: 1 },
			{ text: 'Somewhere between 10 and midnight', rm: 0, lr: 0 },
			{ text: 'After midnight — I never feel tired early enough', rm: 1, lr: 0 },
			{ text: "Honestly, it's different every night", rm: 1, lr: 0 },
		],
	},
	{
		id: 2,
		question: "Once you're in bed, what happens?",
		subtext: 'Lights off, phone down, eyes closed.',
		options: [
			{ text: "I'm out in minutes — that part's not my problem", rm: 0, lr: 2 },
			{ text: 'Takes me 15–20 minutes, pretty normal I think', rm: 0, lr: 0 },
			{ text: 'I toss and turn for at least 30 minutes', rm: 1, lr: 0 },
			{ text: 'An hour or more. Sometimes I just give up and grab my phone', rm: 2, lr: 0 },
		],
	},
	{
		id: 3,
		question: "What's your brain doing when you're trying to sleep?",
		subtext: 'The moment your head hits the pillow.',
		options: [
			{ text: 'Replaying conversations, planning tomorrow, running scenarios', rm: 2, lr: 0 },
			{ text: 'Jumping randomly — song lyrics, memories, weird thoughts', rm: 1, lr: 0 },
			{ text: "It's quiet, but my body just doesn't feel rested", rm: 0, lr: 1 },
			{ text: "Nothing — I'm asleep before I'd even notice", rm: 0, lr: 2 },
		],
	},
	{
		id: 4,
		question: 'Your alarm goes off. How do you feel?',
		subtext: 'That first 30 minutes of being awake.',
		options: [
			{ text: "Like I haven't slept at all — heavy, foggy, drained", rm: 0, lr: 2 },
			{ text: 'Rough, but I can push through once the coffee kicks in', rm: 0, lr: 1 },
			{ text: "Depends — if I fell asleep at a decent hour, I'm fine", rm: 1, lr: 0 },
			{ text: "Usually fine, actually — mornings aren't my issue", rm: 1, lr: 0 },
		],
	},
	{
		id: 5,
		question: 'How many hours are you actually sleeping?',
		subtext: 'Not time in bed — actual sleep.',
		options: [
			{ text: 'Less than 5 — I lose hours just trying to fall asleep', rm: 2, lr: 0 },
			{ text: 'About 5 to 6 hours', rm: 1, lr: 0 },
			{ text: '6 to 7 hours — seems like it should be enough', rm: 0, lr: 0 },
			{ text: '7 to 8+ hours — and I still feel terrible', rm: 0, lr: 2 },
		],
	},
	{
		id: 6,
		question: 'What are you doing in the last hour before bed?',
		subtext: 'No judgment. Just be real.',
		options: [
			{ text: "Scrolling my phone in bed — it's the only time I have to myself", rm: 2, lr: 0 },
			{ text: 'Watching something, then I switch to my phone for a bit', rm: 1, lr: 0 },
			{ text: 'I usually wind down — reading, low lights, nothing crazy', rm: 0, lr: 0 },
			{ text: 'I crash on the couch and barely make it to bed', rm: 0, lr: 1 },
		],
	},
	{
		id: 7,
		question: "What's your relationship with caffeine?",
		subtext: 'Coffee, tea, energy drinks — all of it.',
		options: [
			{ text: "I need it past 4pm or I won't make it through the day", rm: 1, lr: 0 },
			{ text: 'I have my last cup around 2–3pm', rm: 1, lr: 0 },
			{ text: "Morning only — I'm strict about it", rm: 0, lr: 0 },
			{ text: "Caffeine doesn't even help anymore — I'm tired regardless", rm: 0, lr: 1 },
		],
	},
	{
		id: 8,
		question: 'Do you wake up in the middle of the night?',
		subtext: 'Even briefly.',
		options: [
			{ text: "Rarely — once I'm out, I'm out", rm: 1, lr: 0 },
			{ text: 'Sometimes, but I drift back within a few minutes', rm: 0, lr: 0 },
			{ text: "Yes — and then I'm wide awake for 30+ minutes", rm: 1, lr: 0 },
			{ text: 'I wake up a lot but fall right back asleep — and still feel wrecked', rm: 0, lr: 2 },
		],
	},
	{
		id: 9,
		question: 'How would you describe your energy on a typical day?',
		subtext: 'Think about an average Tuesday, not your worst day.',
		options: [
			{ text: 'Low from the moment I wake up. All day.', rm: 0, lr: 2 },
			{ text: "I'm a zombie until noon, then I'm okay", rm: 0, lr: 1 },
			{ text: "It's inconsistent — some days fine, some days awful", rm: 0, lr: 0 },
			{ text: "My days are fine — it's just when bedtime hits that things fall apart", rm: 2, lr: 0 },
		],
	},
	{
		id: 10,
		question: 'What have you already tried to fix your sleep?',
		subtext: "Pick the one closest to what you've done.",
		options: [
			{ text: 'Melatonin, magnesium, or other sleep supplements', rm: 1, lr: 0 },
			{ text: 'Meditation apps, sleep stories, or breathing exercises', rm: 1, lr: 0 },
			{ text: 'New mattress, blackout curtains, or changing my sleep environment', rm: 0, lr: 1 },
			{ text: "Sleeping more hours — and it didn't make a difference", rm: 0, lr: 2 },
		],
	},
];
