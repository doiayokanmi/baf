export const links = [
    {
        title: 'Home',
        linkto: '/'
    },
    {
        title: 'gallery',
        linkto: '/gallery'
    },
    {
        title: 'Projects',
        linkto: '/projects'
    },
    {
        title: 'Speeches',
        linkto: '/speeches'
    },
    {
        title: 'About',
        linkto: '/about'
    },

]

const startYear = 2015;
const currentYear = new Date().getFullYear();
export const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
