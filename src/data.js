import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "YOGA",
        info: "Find Balance, Strength, and Peace Within - Namaste Through Yoga.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "CARDIO",
        info: "Empower Your Heart, Embrace Life: Cardio Care Redefined.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "ZUMBA",
        info: "Move to the Beat, Find Your Groove: Zumba - Where Fitness Feels Like a Fiesta!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "INDOOR GAMES",
        info: "Fun Unleashed Indoors: Play, Laugh, and Win at Every Turn!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Best Fitness",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Perfect Personality",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Gain muscles",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Strength",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "The frequency of exercise depends on various factors like your fitness goals, current fitness level, and the type of exercise you're doing. In general, adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days a week."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out ultimately depends on your personal schedule, preferences, and body rhythms. However, there are some potential benefits to working out at different times of the day."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "The ideal length of your workout can vary based on several factors, including your fitness goals, fitness level, type of exercise, and schedule. Here's a general guideline."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up before a workout is highly beneficial. It helps prepare your body for the physical exertion ahead and reduces the risk of injury. A good warm-up typically includes light cardiovascular activity followed by dynamic stretching or movements that mimic the exercise you're about to do."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Incorporating both strength training and cardio into your fitness routine offers a range of benefits for overall health and fitness."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Weightlifting is an excellent form of strength training, but it's not the only option. Strength training encompasses a variety of exercises that challenge your muscles to build strength, endurance, and power. Weightlifting, which involves using free weights or weight machines, is a popular and effective way to achieve these goals. However, bodyweight exercises, resistance bands, and other forms of resistance training can also be highly effective for building strength."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Arun",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Aakash",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Goutam",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Sourav",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Mohit raj",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 999,
        features: [
            {feature: 'state-of the art equipment', available: true},
            {feature: 'pertionalized training program', available: true},
            {feature: 'Group Fitness Classes', available: true},
            {feature: 'Nutritional Guidance', available: true},
            {feature: '24/7 Access', available: true},
            {feature: 'Hygiene and Safety', available: false},
            {feature: 'Progress Tracking', available: false},
            {feature: 'Recovery Services', available: false},
            {feature: 'Specialized Workouts', available: false},
            {feature: 'Community Events', available: false},
            {feature: 'Online Resources', available: false},
            {feature: 'Sports Facilities', available: false},
            {feature: 'Membership Benefits', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 1299,
        features: [
            {feature: 'state-of the art equipment', available: true},
            {feature: 'pertionalized training program', available: true},
            {feature: 'Group Fitness Classes', available: true},
            {feature: 'Nutritional Guidance', available: true},
            {feature: '24/7 Access', available: true},
            {feature: 'Hygiene and Safety', available: true},
            {feature: 'Progress Tracking', available: true},
            {feature: 'Recovery Services', available: true},
            {feature: 'Specialized Workouts', available: true},
            {feature: 'Community Events', available: false},
            {feature: 'Online Resources', available: false},
            {feature: 'Sports Facilities', available: false},
            {feature: 'Membership Benefits', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 1699,
        features: [
            {feature: 'state-of the art equipment', available: true},
            {feature: 'pertionalized training program', available: true},
            {feature: 'Group Fitness Classes', available: true},
            {feature: 'Nutritional Guidance', available: true},
            {feature: '24/7 Access', available: true},
            {feature: 'Hygiene and Safety', available: true},
            {feature: 'Progress Tracking', available: true},
            {feature: 'Recovery Services', available: true},
            {feature: 'Specialized Workouts', available: true},
            {feature: 'Community Events', available: true},
            {feature: 'Online Resources', available: true},
            {feature: 'Sports Facilities', available: true},
            {feature: 'Membership Benefits', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]