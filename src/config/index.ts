const HOST = 'http://localhost:3000'
const API = '/api'
const API_URL = `${HOST}${API}`

export type RouteType = {
	href : string;
	label: string;
	icon?: any;
	hidden?: boolean;
};

export const siteConfig = {
    name: 'hardware shop',
    description: '',
    ROUTE: {
        login: {
            label: 'ورود',
            href: '/login',
            icon: null
        },
        register: {
            label: 'ثبت نام',
            href: '/register',
            icon: null
        },
        about: {
            label: 'درباره ی ما',
            href: '/about',
            icon: null
        },
        home: {
            label:'خانه',
            href:'/',
            icon:null
        },
        tests:{
            label:'آزمون ها' ,
            href:'/testpage',
            icon:null
        },
        news :{
            label:'اخبار',
            href:'/blogpage',
            icon:null
        },
        news_detail:{
            label:'',
            href:'/blogpage/:id',
            icon:null
        },


    }
} as const

export default siteConfig;