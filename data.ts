import { Project, Article } from './types';

export const projects: Project[] = [
    {
        id: 'atmosic',
        client: 'Atmosic',
        title: 'ATMOSIC',
        category: 'Websites',
        industry: 'Technology',
        description: 'Pioneering ultra-low power connectivity and compute solutions.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', // Tech/Green vibe
        size: 'large',
        featured: true,
        theme: {
            text: '#FFFFFF',
            background: '#050505',
            accent: '#4ADE80'
        },
        details: {
            involvement: ['Website', 'Strategy'],
            deliverables: ['Interactive Experience', 'Development'],
            year: '2024',
            websiteUrl: 'https://atmosic.com',
            challenge: 'Atmosic, pioneering ultra-low power connectivity and compute solutions, partnered with Nika to reimagine its digital presence—highlighting its mission to extend the life of battery-operated applications.',
            images: [
                'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
            ]
        }
    },
    {
        id: 'ethical-life',
        client: 'Ethical Life',
        title: 'ETHICAL LIFE',
        category: 'E-Commerce',
        industry: 'Food & Consumer',
        description: 'Helping create a kinder world by offering gummy vitamins.',
        imageUrl: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1937&auto=format&fit=crop', // Bright/pills vibe
        size: 'tall',
        featured: false,
        theme: {
            text: '#000000',
            background: '#D1F072', // Lime green from video
            accent: '#FFFFFF'
        },
        details: {
            involvement: ['Branding', 'Web Design'],
            deliverables: ['Identity System', 'Shopify Store'],
            year: '2023',
            challenge: 'Ethical Life helps create a kinder world by offering gummy vitamins that support wellness for health-conscious individuals.',
            images: [
                'https://images.unsplash.com/photo-1615486511484-92e59050893f?q=80&w=1932&auto=format&fit=crop', // Product shot
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop', // Lifestyle
            ]
        }
    },
    {
        id: 'merlin',
        client: 'Merlin',
        title: 'MERLIN',
        category: 'Aviation',
        industry: 'Technology',
        description: 'Autonomous flight systems for the future.',
        imageUrl: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop',
        size: 'medium',
        featured: false,
        theme: {
            text: '#FFFFFF',
            background: '#18181b',
            accent: '#3B82F6'
        }
    },
    {
        id: 'basedai',
        client: 'BaseDAI',
        title: 'BASEDAI',
        category: 'Websites',
        industry: 'Technology',
        description: 'Decentralized AI infrastructure.',
        imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop',
        size: 'tall',
        featured: false,
        theme: {
            text: '#FFFFFF',
            background: '#000000',
            accent: '#D90429'
        }
    },
    {
        id: 'coffer',
        client: 'Coffer Group',
        title: 'COFFER GROUP',
        category: 'Finance',
        industry: 'Corporate',
        description: 'Modern financial solutions.',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        size: 'large',
        featured: true,
        theme: {
            text: '#FFFFFF',
            background: '#1e3a8a',
            accent: '#60a5fa'
        }
    },
     {
        id: 'hvac',
        client: 'HVAC Erz',
        title: 'HVAC ERZ',
        category: 'Branding',
        industry: 'Construction',
        description: 'Bold identity for industrial leaders.',
        imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1932&auto=format&fit=crop',
        size: 'medium',
        featured: false,
        theme: {
            text: '#000000',
            background: '#e5e7eb',
            accent: '#000000'
        }
    }
];

export const articles: Article[] = [
    {
        id: 'future-websites',
        type: 'ARTICLE',
        title: 'The Future of Websites in the Age of AI',
        date: 'Jul 31st',
        link: '/thoughts/future-websites',
        color: 'text-orange-400',
        content: '<p>As AI reshapes the digital landscape, websites are evolving from static brochures to dynamic, intelligent experiences...</p>'
    },
    {
        id: 'job-pm',
        type: 'JOB POSTING',
        title: 'Job Opportunity: Senior Digital Project Manager',
        date: 'June 1st',
        link: '/thoughts/job-pm',
        color: 'text-green-400',
        content: `
            <h2 class="text-2xl font-bold mb-4">About Nika</h2>
            <p class="mb-6">We are Nika. As members of the Silicon Valley wilderness, we've always stood behind brave brands. Those that tap into creativity and collaboration to shape our world.</p>
            <h2 class="text-2xl font-bold mb-4">Role & Responsibilities</h2>
            <ul class="list-disc pl-5 space-y-2 mb-6">
                <li>You'll frequently work face-to-face (or via Zoom) with our clients, occasionally embedding with them for periods of time.</li>
                <li>You'll work as part of a small but fast-growing team of foks to build out our reputation as the premier digital partner.</li>
                <li>You have hands-on experience with producing high-end digital work and an intimate understanding of the web development lifecycle.</li>
            </ul>
            <h2 class="text-2xl font-bold mb-4">How to Apply</h2>
            <p>Send your portfolio and resume to contact@nika.agency</p>
        `
    },
    {
        id: 'award-2025',
        type: 'ANNOUNCEMENT',
        title: 'Nika is a 2025 Clutch Global Award Winner!',
        date: 'May 23rd',
        link: '/thoughts/award-2025',
        color: 'text-purple-400'
    },
    {
        id: 'ai-help',
        type: 'ARTICLE',
        title: 'How AI Can Help Improve Your Website',
        date: 'May 7th',
        link: '/thoughts/ai-help',
        color: 'text-blue-400'
    },
    {
        id: 'addys',
        type: 'ARTICLE',
        title: 'Lighting Up the Night at the ADDYs',
        date: 'April 30th',
        link: '/thoughts/addys',
        color: 'text-yellow-400'
    },
    {
        id: 'snia-case',
        type: 'CASE STUDY',
        title: 'SNIA Case Study: Migrating from Drupal 7 to 10',
        date: 'April 25th',
        link: '/thoughts/snia-case',
        color: 'text-red-400'
    },
];
