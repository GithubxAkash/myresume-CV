/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
    firstName: 'Akash Ramsuchit',
    lastName: 'Vishwakarma',
    jobTitle: 'UI/UX Designer & Developer',
    city: 'Pune',
    postalCode: '411039',
    country: 'India',
    phone: '+91 7875043041',
    email: 'vishwakarmaxakash@gmail.com',
    education: [
        {
            school: 'DiSHA COMPUTER STUDIES',
            degree: 'DIPLOMA COURSE IN GRAPHIC ANIMATION',
            graduationDate: '2018/Present',
            description: 'DCGA Certificate'
        },
        {
            school: 'Codecademy',
            degree: ' HTML and CSS Fundamentals Certification',
            graduationDate: '2020/2021',
            description: 'Coding Certificate'
        }
    ],
    links: [
        {
            label: 'GitHub',
            link: 'https://github.com/GithubxAkash'
        },
        {
            label: 'CodePen',
            link: 'https://codepen.io/CodePenxAkash/'
        },
        {
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/linkedxakash/'
        },
        {
            label: 'Website',
            link: 'https://akashvishwakarma.netlify.app/'
        },
    ],
    skills: [
        'HTML',
        'CSS',
        'CMS',
        'FRAMER/CANVA',
        'BOOTSTRAP',
        'FIGMA',
        'ADOBE XD',
        'ADOBE ILLUSTRATION',
        'SEO',
    ],
    languages: ['English', 'Hindi', 'Marathi'],
    professionalSummary: `I'm a 23 years old design minded UI/UX Designer & Front-end developer. I am highly motivated and very imaginative by finding inspiration in everyday things, pushing my own boundaries and allowing myself to think out if the box.`,
    employmentHistory: [
        {
            jobTitle: 'Designer & Developer',
            startDate: 'May 2020',
            endDate: 'Present',
            employer: 'ASTERIK.AGENCY',
            city: 'HYBRID',
            achievements: [
                'Developed, tested, and maintained front-end code for web applications using HTML, CSS, and JavaScript..',
                'Developing clean, maintainable, and well-documented code that meets project requirements and best practices.',
                'Created responsive and accessible designs that optimized the user experience across a variety of devices and platforms.'
            ]
        },
        {
            jobTitle: 'VOLUNTEER',
            startDate: 'May 2018',
            endDate: 'Mar 2020',
            employer: 'RUN BUDDIES CLUB',
            city: 'AREA',
            achievements: [
                'Developed and implemented innovative programs and initiatives to increase club membership and engagement..',
                'Maintaining accurate records of club membership, finances, and activities.',
                'Successfully motivated and inspired club members to achieve their fitness goals.',
            ]
        },
    ],

    EDUCATION: [
        {
            jobTitle: 'BACHELOR COMPUTER SCIENCE',
            startDate: 'May 2021',
            endDate: 'July 2023',
            employer: 'SINGHANIA UNIVERSITY',
            city: 'Rajasthan, INDIA',
            achievements: [
                'Graduation Certificate'
            ]
        },
        {
            jobTitle: 'SECONDARY SCHOOL CERTIFICATE',
            startDate: 'May 2018',
            endDate: 'Mar 2019',
            employer: 'SHRI SAWAMI SAMARTH JUNIOR COLLEGE',
            city: 'Pune, INDIA',
            achievements: [
                'Junior College Certificate',
            ]
        },
        {
            jobTitle: 'HIGHER SCHOOL CERTIFICATE',
            startDate: 'May 2016',
            endDate: 'Mar 2017',
            employer: 'SHRI SAWAMI SAMARTH ENGLISH MEDIUM SCHOOL',
            city: 'Pune, INDIA',
            achievements: [
                'higher School Certificate',
            ]
        },
    ],
    projectHistory: [
        {
            jobTitle: 'Designed & developed Asterik.Agency',
            startDate: 'Aug 2020',
            employer: 'ASTERIK.AGENCY',
            city: 'Pune, INDIA',
            achievements: [
                'Developed, tested, and maintained front-end code for web applications using HTML, CSS, and JavaScript..',
                'Developing clean, maintainable, and well-documented code that meets project requirements and best practices.',
            ]
        },
        {
            jobTitle: 'Github & Codepen',
            startDate: 'May 2018',
            endDate: 'Present',
            employer: 'Portfolio',
            city: 'OPEN SOURCE',
            achievements: [
                'GITHUB: https://github.com/GithubxAkash',
                'CODEPEN: https://codepen.io/CodePenxAkash/',
            ]
        },
    ],
    photo: '',
}

const formatResume = (r) => ({
    ...r,
    address: [
        r.country,
        r.city,
        r.postalCode
    ].filter(Boolean).join(', ')
})

new Vue({
    el: "#app",
    data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
