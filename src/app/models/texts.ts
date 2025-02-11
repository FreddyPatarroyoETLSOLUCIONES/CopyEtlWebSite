export const Text: any = {
    Nabvar: {
        Menu:[
            {title: 'inicio', subMenu: [], link:'/principal'},
            {title: 'Servicios', subMenu: [
                {subTitle: 'Consultoría', link:'/consultingService'},
                {subTitle: 'Innovación', link:'/innovationService'},
                {subTitle: 'BPO', link:'/bpoService'},
                {subTitle: 'Automatización de ambiente QA', link:'/environmentAutomation'}
            ], link:''},
            {title: 'Productos', subMenu: [
                {subTitle: 'Infocusnews', link:'/infocusnwesProduct'},
                {subTitle: 'Business Intelligence', link:'/businessIntelligenceProduct'},
                {subTitle: 'Innovación', link:'/innovationProduct'},
            ], link:''},
            {title: 'Nosotros', subMenu: [], link:'/aboutUs'}
        ]
    },
    Principal: {
        Welcome: {
            Title1: 'El camino de la Evolución Digital',
            Subtitle1: 'Soluciones Tecnológicas de Alto Impacto',
            Text1: 'Más de 10 años de experiencia, desarrollando soluciones tecnológicas innovadoras para sectores clave. Transformamos industrias con proyectos de alto impacto'
        },
        Services: {
            Title: 'SERVICIOS TI',
            Text: 'A través de las mejores prácticas de TI, damos soluciones de gran valor a nuestros clientes a través de nuestros servicios.',
            ServicesList: [
                {
                    title: 'Consultoría',
                    description: 'Servicios de asesoría integral en gestión de procesos para garantizar que las soluciones tecnológicas.',
                    image: './assets/images/consultoria.jpg',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/consultingService'
                },
                {
                    title: 'Innovación',
                    description: 'Servicios de incluyen procesos de reingeniería, analítica, gestión, y procedimientos de datos para identificar causa raíz de problemas en una organización que sean solucionables mediante el uso de tecnología.',
                    image: './assets/images/innovacion.jpg',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/innovationService'
                },
                {
                    title: 'BPO',
                    description: 'Servicios tercerizados de bajo costo y alta productividad para nuestros clientes, aplicando técnicas de reingeniería para optimizar tiempos de respuesta y generación de mayor valor.',
                    image: './assets/images/bpo.jpg',
                    circle1: './assets/icons/circle1.png',
                    circle2: './assets/icons/circle2.png',
                    url: '/bpoService'
                },
            ]
        },
        Skills: {
            Title1: 'Proyectos, Requerimientos, Soporte y Mantenimiento',
            SkillsList: [
                'Manejo de Solicitudes de desarrollo.',
                'Liderazgo del proyecto end to end.',
                'Gestión de Solicitudes: Incidencias, requerimientos y proyectos.',
                'Construcción y liberación con “victorias tempranas”.',
                'Piezas de software solventes, autónomas y de valor para el negocio.',
                'Análisis de las inquietudes del negocios para traducirlas en iniciativas de tecnología de rápida y solvente aplicación.'
            ]
        },
        Products: {
            Title1: 'Innovar con las tendencias tecnológicas',
            Text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ProductsList: [
                { title: 'Infocusnews', icon: './assets/icons/text.png', text: 'Diario digital que descubre información de valor en su compañía utilizando modelos estadísticos…', url:'/infocusnwesProduct' },
                { title: 'ETL (BI) Business Intelligence', icon: './assets/icons/db.png', text: 'Servicio de gestión en nube o infraestructura propia del cliente para diseñar…', url:'/businessIntelligenceProduct' },
                { title: 'Motor de Sugerencias', icon: './assets/icons/start.png', text: 'El motor de sugerencia mide las preferencias de los clientes a cada una de ellas…', url:'/infocusnwesProduct' },
                { title: 'Innovación', icon: './assets/icons/podio.png', text: 'Identificación de las preferencias individuales de sus clientes con máximo detalle…', url:'/innovationProduct' },
            ]
        },
        InfoValues: {
            Services: [
                {
                    title: 'Atención Inmediata',
                    description: 'Somos oportunos en cada requerimiento solicitado por nuestros clientes.',
                    image: './assets/wallpapers/atencioninmediata.jpg'
                },
                {
                    title: 'Estrategia',
                    description: 'No solo buscamos estrategias y herramientas sino soluciones que impacten.',
                    image: './assets/wallpapers/estrategia.jpg'
                },
                {
                    title: 'Optimización',
                    description: 'Continuamente queremos mantener nuestras aplicaciones de manera óptima y efectiva.',
                    image: './assets/wallpapers/optimizacion.jpg'
                },
                {
                    title: 'Innovación',
                    description: 'Queremos siempre estar a la vanguardia en la utilización del desarrollo y las tecnologías.',
                    image: './assets/wallpapers/innovacion_2.jpg'
                }
            ]
        },
        Counter: {
            Info: [
                {
                    number: 100,
                    description: 'Proyectos Completados'
                },
                {
                    number: 700.000,
                    description: 'Casos de soporte atendidos'
                },
                {
                    number: 9,
                    description: 'Años de experiencia'
                },
                {
                    number: 45,
                    description: 'Proyectos TI implementados'
                }
            ]
        }
    },
    Footer: {
        ContentFooter: {
            ContactInformation: {
                Text1: "Es fundamental para nosotros tener una comunicación fluída con nuestros clientes y poder hacer excelentes proyectos y negocios.",
                MeansContact: [
                    {
                        MeansContact1: [
                            {img:'./assets/icons/phone.png', text: 'Números', info: '+57 1 300 4345'},
                            {img:'./assets/icons/mail.png', text: 'Correo', info: 'info@etlsoluciones.com'}
                        ]
                    },
                    {
                        MeansContact2: [
                            {img:'./assets/icons/whatsapp.png', text: 'WhatsApp', info: '+57 1 300 4345'},
                            {img:'./assets/icons/ubication.png', text: 'Oficina', info: 'Carrera. 14 # 94a- 61,  Oficina 303'}
                        ]
                    },
                    {
                        MeansContact3: [
                            {img:'./assets/icons/whatsapp.png', text: 'WhatsApp', info: '+57 1 300 4345'},
                            {img:'./assets/icons/ubication.png', text: 'Oficina', info: 'Carrera. 14 # 94a- 61,  Oficina 303'}
                        ]
                    }
                ]
            }
        },
        SubFooter: {
            Logo: "./assets/logo/logo_white.png",
            Text1: 'ETL Soluciones presenta permanentemente nuevas oportunidades para profesionales interesados en un lugar de trabajo creciente, apasionado y orientado al equipo.',
            socialNetworks: [
                {name: 'Facebook', Url: 'https://www.facebook.com/', img: './assets/socialNetworks/facebook.png'},
                {name: 'Instagram', Url: 'https://www.instagram.com/', img: './assets/socialNetworks/instagram.png'},
                {name: 'Linkedin', Url: 'https://co.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F', img: './assets/socialNetworks/linkedin.png'}
            ],
            
            Title1: "Menu",
            Menu: [
                'Inicio',
                'Servicio',
                'Productos',
                'Nosotros',
            ],
            Img:"./assets/images/image1.png",
            Text2: "&copy; 2024 ETL Soluciones. Todos los derechos reservados."
        }
    }
}