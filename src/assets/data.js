import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8, portfolio9, pricingBusiness, pricingFree, pricingStarter, pricingUltimate, testimonial1, values1, values2, values3 } from "./image";

export const valuesData = [
    {
        img: values1,
        title: 'Ad cupiditate sed est odio',
        desc: 'Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.'
    },
    {
        img: values2,
        title: 'Voluptatem voluptatum alias',
        desc: 'Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.'
    },
    {
        img: values3,
        title: 'Fugit cupiditate alias nobis.',
        desc: 'Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.'
    },
]


{/*//*--=== Services Data --====*/ }
export const servicesData = [
    {
        styleClass: "service-box blue",
        title: 'Nesciunt Mete',
        disc: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'
    },
    {
        styleClass: "service-box orange",
        title: 'Eosle Commodi',
        disc: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.'
    },
    {
        styleClass: "service-box green",
        title: 'Ledo Markt',
        disc: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti'
    },
    {
        styleClass: "service-box red",
        title: 'Asperiores Commodi',
        disc: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.'
    },
    {
        styleClass: "service-box purple",
        title: 'Velit Doloremque.',
        disc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore'
    },
    {
        styleClass: "service-box pink",
        title: 'Dolori Architecto',
        disc: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.'
    }
]

{/*//*--=== Pricing Data --====*/ }
export const pricingData = [

    {
        style: '#07d5c0',
        price: 0,
        title: "Free Plan",
        img: pricingFree,
        listStyle: 'na'
    },
    {
        spanTitle: 'Featured',
        spanTitleStyle: 'featured',
        style: '#65c600',
        price: 19,
        title: "Starter Plan",
        img: pricingStarter,
        listStyle: 'na'
    },
    {
        style: '#ff901c',
        price: 29,
        title: "Business Plan",
        img: pricingBusiness,
        listStyle: 'na'
    },
    {
        style: '#ff0071',
        price: 49,
        title: "Ultimate Plan",
        img: pricingUltimate,
        listStyle: 'na'
    }
]

{/*//*--=== FAQ Data --====*/ }
export const FAQList1 = [
    {
        bsParentId: '#faqlist1',
        bsTargetId: '#faq-content-1',
        title: 'Non consectetur a erat nam at lectus urna duis?',
        disc: ' Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
        accordionId: 'faq-content-1'
    },
    {
        bsParentId: '#faqlist1',
        bsTargetId: '#faq-content-2',
        title: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
        disc: ' Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
        accordionId: 'faq-content-2'
    },
    {
        bsParentId: '#faqlist1',
        bsTargetId: '#faq-content-3',
        title: ' Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?',
        disc: '  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
        accordionId: 'faq-content-3'
    }
]

export const FAQList2 = [
    {

        bsTargetId: '#faq2-content-1',
        bsParentId: '#faqlist2',
        title: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
        disc: '  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
        accordionId: 'faq2-content-1'
    },
    {
        bsTargetId: '#faq2-content-2',
        bsParentId: '#faqlist2',
        title: ' Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
        disc: '  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in',
        accordionId: 'faq2-content-2'
    },
    {
        bsTargetId: '#faq2-content-3',
        bsParentId: '#faqlist2',
        title: ' Varius vel pharetra vel turpis nunc eget lorem dolor?',
        disc: 'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.',
        accordionId: 'faq2-content-3'
    },
]

{/*//*--=== Portfolio Data --====*/ }
export const portfolioData = [
    {
        id: 1,
        img: portfolio1,
        title: 'App 1',
        subTitle: 'App',
        portfolioClass: "filter-app"
    },
    {
        id: 2,
        img: portfolio2,
        title: 'Web 3',
        subTitle: 'web',
        portfolioClass: "filter-web"
    },
    {
        id: 3,
        img: portfolio3,
        title: 'App 2',
        subTitle: 'App',
        portfolioClass: "filter-app"
    },
    {
        id: 4,
        img: portfolio4,
        title: 'Card 2',
        subTitle: 'Card',
        portfolioClass: "filter-card"
    },
    {
        id: 5,
        img: portfolio5,
        title: 'Web 2',
        subTitle: 'Web',
        portfolioClass: " filter-web"
    },
    {
        id: 6,
        img: portfolio6,
        title: 'App 3',
        subTitle: 'App',
        portfolioClass: "filter-app"
    },
    {
        id: 7,
        img: portfolio7,
        title: 'Card 1',
        subTitle: 'Card',
        portfolioClass: "filter-card"
    },
    {
        id: 8,
        img: portfolio8,
        title: 'Card 3',
        subTitle: 'Card',
        portfolioClass: "filter-card"
    },
    {
        id: 9,
        img: portfolio9,
        title: 'Web 3',
        subTitle: 'Web',
        portfolioClass: "filter-web"
    },
]

{/*//*--=== Testimonials Data --====*/ }
export const testimonialsData = [
    {
        disc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        img: testimonial1,
        name: 'Saul Goodman',
        title: 'Ceo & Founder'
    },
    {
        disc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
        img: testimonial1,
        name: 'Sara Wilsson',
        title: 'Designer'
    },
    {
        disc: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
        img: testimonial1,
        name: 'Jena Karlis',
        title: 'Store Owner'
    },
    {
        disc: ' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
        img: testimonial1,
        name: 'Matt Brandon',
        title: 'CFreelancer'
    },
    {
        disc: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
        img: testimonial1,
        name: 'John Larson',
        title: 'Entrepreneur'
    },
]