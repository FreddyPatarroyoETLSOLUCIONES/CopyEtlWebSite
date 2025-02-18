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
    Service: {
        Consulting: {
            Title:{
                Title: 'Consultoría',
                Text: 'Mayor retorno a su Negocio',
                Img: './assets/wallpapers/wallp_consultoria.jpg'
            },
            Description: {
                Title: 'Asesorías Integrales',
                Text1: 'Servicios de asesoría integral en gestión de procesos para garantizar que las soluciones tecnológicas de su organización son mayor retorno posible a su negocio.',
                Img: './assets/images/consultoria_left.png',
                SubTitle: '¿En qué consiste?',
                Text2: '<p>Consisten en un servicio de asesoría especializada e independiente al que recurren las empresas en diferentes industrias con el fin de encontrar, soluciones a uno o más problemas y/o mejoras de negocio. </p> </br> <p>Nuestros servicios de consultoría son parte de las grandes soluciones que te ofrece ETL. </p> </br> <p>Las consultorías consisten en un servicio de asesoría especializada e independiente al que recurren las empresas en diferentes industrias con el fin de encontrar, soluciones a uno o más problemas y/o mejoras de negocio. Por esto, nuestros servicios de consultoría son parte de las grandes soluciones que te ofrece ETL. </p>'
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_consultoria.jpg'
            }
        },
        Innovation: {
            Title:{
                Title: 'Innovación',
                Text: 'Identificando la raíz de cada problema',
                Img: './assets/wallpapers/wallp_innovation.png'
            },
            Description: {
                Title: 'Reingeniería, Analítica, Gestión y Procedimientos de Datos',
                Text1: 'Servicios de incluyen procesos de reingeniería, analítica, gestión, y procedimientos de datos para identificar causa raíz de problemas en una organización que sean solucionables mediante el uso de tecnología.',
                Img: './assets/images/innovation_left.png',
                SubTitle: '¿En qué consiste?',
                Text2: '<p>A pesar de que la palabra innovación se enfoca en la novedad, se relaciona de igual manera con mejorar y potenciar áreas ya establecidas, ya sean productos servicios o sistemas. </p> </br> <p>En ETL nos encargamos de impulsar a tu empresa a través de diferentes soluciones digitales. </p> </br> <p>Consúltanos ahora. </p>'
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_innovation.png'
            }
        },
        BPO: {
            Title:{
                Title: 'BPO',
                Text: 'Optimizando tiempos de respuesta',
                Img: './assets/wallpapers/wallp_bpo.png'
            },
            Description: {
                Title: 'Aplicación de técnicas de reingeniería Optimizando tiempos',
                Text1: 'Servicios tercerizados de bajo costo y alta productividad para nuestros clientes, aplicando técnicas de reingeniería para optimizar tiempos de respuesta y generación de mayor valor.',
                Img: './assets/images/bpo_left.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Business Process Outsourcing Dentro de los Servicios tercerizados tenemos: </p> 
                            </br>
                            <ul class="list" >
                                <li>Soporte</li>
                                <li>Desarrollo de aplicaciones</li>
                                <li>Gestión de infraestructura TI</li>
                                <li>Adecuación y optimización de centros de datos</li>
                            </ul> 
                            </br>
                            <p>Una de las soluciones que tenemos para ofrecerte, es el outsourcing, que consiste en que una empresa contrata nuestros servicios para hacer algo en lo que dicha empresa no se especializa. </p> 
                            </br> 
                            <p>Esto libera a la primera organización para enfocarse en la función central de su negocio. </p>
                            </br> 
                            <p>Consúltanos ahora. </p>`
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_bpo.png'
            }
        },
        EnvironmentAutomation: {
            Title:{
                Title: 'Automatización de la Gestión de Ambientes de QA',
                Text: 'Optimiza y simplifica tus entornos de prueba',
                Img: './assets/wallpapers/wallp_qa.png'
            },
            Description: {
                Title: 'Lorem ipsum dolor',
                Text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                Img: './assets/images/qa_left.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>La automatización en ambientes de QA (Quality Assurance) permite reducir tareas manuales, mejorar la consistencia en los entornos y maximizar el tiempo que los equipos dedican a la creación de valor.  </p> 
                        </br> 
                        <p>Con nuestra solución, podrás optimizar la gestión y configuración de tus entornos de prueba de manera ágil y escalable. </p>`
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_qa.png'
            },
            Question: {
                Title: `¿Por Qué Automatizar <span class="highlight">Ambientes de QA?</span>`,
                Text: 'Automatizar los ambientes de QA significa lograr procesos más consistentes, reducir tiempos y mejorar la eficiencia operativa. Descubre los beneficios clave que esta tecnología puede ofrecer a tu equipo y proyecto.',
                Items: [
                    {Title: 'Consistencia y eficiencia', Text: 'Minimiza errores y asegura que los entornos de prueba se configuren de manera uniforme.'},
                    {Title: 'Reducción de costos y tiempos', Text: 'Menos tareas manuales, más tiempo para tareas estratégicas.'},
                    {Title: 'Escalabilidad', Text: 'Crea y gestiona nuevos entornos rápidamente, adaptándose a las necesidades de tus proyectos.'},
                    {Title: 'Control de versiones', Text: 'Rastrea cambios y mantiene coherencia en cada entorno.'}
                ],
                Img: './assets/icons/sun.png' 
            },
            Numbers: {
                Title: '¿Cómo Funciona Nuestro Proceso de Automatización?',
                Text: 'Nuestro proceso de automatización es integral y se adapta a las necesidades de cada proyecto. Desde la evolución inicial hasta la implementación de herramientas avanzadas, cada paso está diseñado para optimizar y simplificar la gestión de tus entornos de QA.',
                Items: [
                    {Title: 'Evaluación de Requisitos', Text: 'Identificamos los entornos necesarios y las herramientas más adecuadas para cada proyecto.'},
                    {Title: 'Selección de Herramientas', Text: 'Utilizamos tecnologías avanzadas como Docker, Kubernetes y Terraform para optimizar cada entorno.'},
                    {Title: 'Definición de Arquitectura', Text: 'Diseñamos la infraestructura ideal de QA, asegurando servidores, bases de datos y servicios confiables.'},
                    {Title: 'Configuración Automatizada', Text: 'mplementamos CI/CD para la automatización, agilizando la creación y configuración de pruebas.'},
                ]
            },
            Accordion: {
                Title: 'Apoyo Completo en <span class="highlight">Documentación y Capacitación</span>',
                Text: 'Nos aseguramos de que todo el proceso y las configuraciones queden documentados de manera clara y concisa. Además, capacitamos a tu equipo en el uso de herramientas y procesos, garantizando una fácil adopción y mantenimiento del sistema.',
                Img: './assets/images/image_automation.jpg',
                Items: [
                    {Text: 'Accesibilidad'},
                    {Text: 'Practicidad'},
                    {Text: 'Visualización'},
                    {Text: 'Refuerzo'},
                ]
            }
        }
    },
    Products: {
        Infocusnews: {
            Title:{
                Title: 'Infocusnews',
                Text: 'Modelos estadísticos y de tendencia',
                Img: './assets/wallpapers/wallp_infocusnews.png'
            },
            Description: {
                Title: 'Información de valor de las compañías',
                Text1: 'Diario digital que descubre información de valor en su compañía utilizando modelos estadísticos y de tendencia sobre múltiples variables. Diseño, implementación, soporte a soluciones de telefonía de última generación con PBX I P.',
                Img: './assets/images/infocusnews_right.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>El análisis de datos y la gestión adecuada de la información son unos componentes decisivos para el crecimiento de una compañía.</p> 
                            </br> 
                            <p>Por eso en ETL Soluciones implementamos innovadores modelos para ello.</p>
                            </br> 
                            <p>¿Qué esperas? Consúltanos.</p>`
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_infocusnews.png'
            }
        },
        BusinessIntelligence: {
            Title:{
                Title: 'ETL (BI) Business Intelligence',
                Text: 'En Tiempo Real',
                Img: './assets/wallpapers/wallp_bi.png'
            },
            Description: {
                Title: 'Análisis y Comportamiento de Mercados',
                Text1: 'Servicios gestionables con herramientas en nube, que permiten visualizar en tiempo real y en términos de negocio, el comportamiento de variables claves para mejorar el proceso de toma de decisiones en una organización.',
                Img: './assets/images/bi_right.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Conjunto de procesos, aplicaciones y tecnologías que facilitan la obtención de datos, de manera que puedan ser aprovechados para la toma de decisiones.</p> 
                            </br> 
                            <p>A través de esta línea brindamos asesoría a nuestros clientes en el diseño e implementación de procesos, software y tecnología, para gestionar sus datos existentes en múltiples fuentes, convirtiéndolos en información de valor en la compañía.</p>
                            </br> 
                            <p>Consúltanos ahora y dale a tu empresa el impulso que te ofrece ETL Soluciones.</p>`
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_bi.png'
            }
        },
        Innovation: {
            Title:{
                Title: 'Innovación',
                Text: 'Productos de mayor interés o necesidad',
                Img: './assets/wallpapers/wallp_innovation_p.png'
            },
            Description: {
                Title: 'Análisis y Comportamiento de Mercados',
                Text1: 'Identificación de las preferencias individuales de sus clientes con máximo detalle, le sugerirá en base a éstas qué productos pueden resultar de mayor interés o necesidad para cada cliente.',
                Img: './assets/images/innovation_left.png',
                SubTitle: '¿En qué consiste?',
                Text2: `<p>Los departamentos de TI han evolucionado con el tiempo, ahora se han vuelto un bien indispensable para las empresas al momento de cambios y soluciones innovadoras, transformando a los negocios y haciendo más notable su presencia en el mercado.</p> 
                        </br> 
                        <p>Consúltanos ahora y encuentra las soluciones ideales para tu empresa. En ETL Soluciones, estamos para servirte.</p>`
            },
            Contact: {
                Title: 'Contactanos',
                Text: '¡Contáctanos ahora y lleva tu negocio al siguiente nivel con nuestras soluciones tecnológicas de alto impacto!',
                Img: './assets/wallpapers/contact_innovation_p.png'
            }
        },
    },
    AboutUs:{
        Title: {
            Title: 'ETL SOLUCIONES',
            Text: 'Nuestra Empresa',
            Img: './assets/wallpapers/image_aboutUs.jpg'
        },
        Info: {
            Title: 'Expertos en soluciones de Alto Impacto',
            Text: 'Somos una empresa joven, con ganas y experiencia de profesionales con más de 10 años en el mercado de servicios de tecnología y Sistemas de información, contamos con la participación en proyectos de alto impacto, desarrollamos soluciones de TI aplicadas en sectores como comunicaciones, transporte, comercio, logística, solidario, salud, legal y servicios.',
            Item: [
                {
                    titleCard: 'Mejorar',
                    descriptionCard: 'Modernización de aplicaciones existentes.'
                },
                {
                    titleCard: 'Diseñar y Mejorar',
                    descriptionCard: 'Diseño y desarrollo de aplicaciones Web y Desktop, configurable, escalables y seguras.'
                },
                {
                    titleCard: 'Mantener y Soportar',
                    descriptionCard: 'Integración de aplicaciones y servicios.'
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