import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Crosshair,
  DraftingCompass, MapPinned, Menu, MessageCircle, Phone, Ruler, ShieldCheck,
  Target, X, Compass, ClipboardCheck, Map, Send, Languages, Clock3, LocateFixed
} from 'lucide-react';

type Lang = 'en' | 'kn';
const PHONE = '+919480112556';
const WHATSAPP = '919480112556';
const ADDRESS = 'SRK Nagar-1, Talur Road, opposite Balabharathi Kendria Vidyalaya, Ballari, Karnataka 583103, India';
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

const copy = {
  en: {
    nav: ['Home', 'About us', 'Services', 'Our work', 'FAQ', 'Contact'],
    eyebrow: 'ENGINEERING CONSULTANCY · DIGITAL LAND SURVEYING',
    headline: 'Precision in every measurement. Confidence in every project.',
    intro: 'Engineering consultancy, building sketches and DGPS-based digital land surveying in Ballari and surrounding areas.',
    whatsapp: 'WhatsApp us', call: 'Call now', explore: 'Explore services',
    scroll: 'Scroll to explore', label: 'A PRACTICAL, PRECISION-FOCUSED PARTNER',
    serviceStrip: ['Engineering consultancy', 'Building sketches & drawings', 'DGPS digital land surveying', 'Ballari & nearby areas'],
    aboutEyebrow: 'ABOUT SSMV', aboutTitle: 'Engineering insight. Surveying precision.',
    aboutText: 'SSMV Consultant And Land Surveyors provides engineering consultancy, building sketch services, and digital land surveying solutions in Ballari and surrounding areas. We aim to support our clients with practical technical services, careful fieldwork, and clear communication throughout the assignment.',
    aboutNote: 'Every site is different. We start by understanding your requirement, then discuss a suitable approach for the work.',
    principles: ['Accuracy-focused measurement', 'Practical, professional service', 'Attention to site requirements', 'Clear communication'],
    servicesEyebrow: 'WHAT WE DO', servicesTitle: 'Technical support for your next step.',
    servicesIntro: 'Clear, practical services shaped around your site, project and requirements.',
    learnMore: 'Discuss this service',
    serviceDescriptions: [
      'Professional consultation to understand project requirements, assess relevant site considerations and plan appropriate next steps.',
      'Building sketches and drawings to support planning discussions, layout communication and the clear presentation of project requirements.',
      'DGPS-based digital surveying to capture positional measurements and support land mapping and site-related requirements.'
    ],
    serviceBenefits: [
      ['Project requirement discussions', 'Site-related technical considerations', 'Practical planning support'],
      ['Clear visual representation', 'Drawings to agreed requirements', 'Layout and design communication'],
      ['Digital field data collection', 'Mapping and site-planning support', 'Method selected for the assignment']
    ],
    whyEyebrow: 'THE SSMV APPROACH', whyTitle: 'Built around clarity and care.',
    whyText: 'Technical work should feel understandable. We focus on a considered process, clear conversations and service suited to the actual assignment.',
    whyItems: [
      ['Precision-focused', 'We prioritize careful measurements and suitable methods for each assignment.'],
      ['A practical service offering', 'Engineering consultancy, building sketches and digital surveying in one place.'],
      ['Straightforward communication', 'Speak directly with us to explain your requirements and next steps.'],
      ['Local knowledge, flexible coverage', 'Serving Ballari and nearby areas; other locations can be discussed.'],
      ['No inflated promises', 'Scope, precision, deliverables and availability are discussed for each project.']
    ],
    processEyebrow: 'HOW IT WORKS', processTitle: 'A clear path from enquiry to delivery.',
    process: [
      ['Initial enquiry', 'Contact us by phone or WhatsApp and explain what you need.'],
      ['Requirement discussion', 'We discuss the service, project location, intended use and relevant details.'],
      ['Assessment & planning', 'We discuss the suitable approach, required information and next steps.'],
      ['Service delivery', 'We carry out the agreed work and communicate the relevant deliverables.']
    ],
    galleryEyebrow: 'FIELD NOTES', galleryTitle: 'The work, in context.',
    galleryText: 'These are illustrative images to communicate the type of work. They are not presented as completed SSMV projects.',
    galleryCategories: ['All', 'Field surveying', 'DGPS equipment', 'Building drawings'],
    faqsEyebrow: 'GOOD TO KNOW', faqsTitle: 'Questions, answered clearly.',
    faqs: [
      ['What services does SSMV provide?', 'We provide engineering consultancy, building sketch and drawing services, and DGPS-based digital land surveying. Please contact us to discuss the exact scope you need.'],
      ['What is DGPS-based land surveying?', 'DGPS uses satellite positioning with differential corrections to improve positional measurements. The suitable workflow depends on equipment, correction availability, site conditions and the survey requirements.'],
      ['How accurate can DGPS surveying be?', 'Centimetre-level results may be achievable with suitable equipment, correction services, methods and field conditions. Accuracy is not guaranteed for every assignment and should be assessed for the specific job.'],
      ['Do you provide building sketches and drawings?', 'Yes, building sketch and drawing services are part of our service offering. The drawing type and scope should be discussed before work begins.'],
      ['Do you work outside Ballari?', 'Our primary service area is Ballari and nearby areas. Contact us to discuss availability for other locations.'],
      ['What information should I share before a survey?', 'It helps to share the project location, purpose of the survey, any available site documents, and the type of output you need. Avoid sending sensitive documents until we discuss what is necessary.'],
      ['How can I get a quotation?', 'Call or WhatsApp us with a brief description of the requirement and location. Pricing depends on the scope and details of the assignment.'],
      ['How do I contact SSMV?', 'Use the call button or WhatsApp link on this website. The enquiry form prepares a message for you to review before opening WhatsApp; it does not silently send your details.']
    ],
    areaEyebrow: 'LOCAL SERVICE', areaTitle: 'Serving Ballari and surrounding areas.',
    areaText: 'Looking for engineering consultancy, building sketches or DGPS-based digital land surveying in Ballari? Contact us to discuss your requirement. For locations outside the immediate area, we can confirm availability directly.',
    contactEyebrow: 'LET’S TALK', contactTitle: 'Let’s discuss your project.',
    contactText: 'Tell us what you need. We’ll use your message to start a conversation about the right next step.',
    name: 'Full name', mobile: 'Mobile number', service: 'Service required', location: 'Site / project location', details: 'Brief description', preferred: 'Preferred contact method',
    chooseService: 'Choose a service', servicesOptions: ['Engineering consultancy', 'Building sketches & drawings', 'DGPS digital land surveying', 'General enquiry'],
    phoneOption: 'Phone call', waOption: 'WhatsApp', formSend: 'Prepare WhatsApp message', formHint: 'Your details are not sent automatically. WhatsApp opens with a draft message for you to review and send.',
    privacy: 'We use the information you enter only to prepare your enquiry message. Nothing is stored by this website.',
    footerText: 'Engineering consultancy, building sketches and digital land surveying in Ballari and surrounding areas.',
    quickLinks: 'Quick links', ourServices: 'Services', reachUs: 'Reach us', directions: 'Get directions',
    copyright: 'All rights reserved.', illustrative: 'Illustrative image', close: 'Close', menu: 'Open navigation menu',
    required: 'Please complete your name, mobile number and service selection.', invalidPhone: 'Please enter a valid mobile number.',
    ready: 'Your WhatsApp message is ready. Review the details in WhatsApp before sending.',
    contact: 'Contact SSMV', addressLabel: 'OFFICE ADDRESS', serviceArea: 'SERVICE AREA', locationText: 'Ballari, Karnataka and nearby areas',
    precisionCaveat: 'Survey precision depends on equipment, method, correction services and field conditions. Deliverables and scope are agreed for each assignment.'
  },
  kn: {
    nav: ['ಮುಖಪುಟ', 'ನಮ್ಮ ಬಗ್ಗೆ', 'ಸೇವೆಗಳು', 'ನಮ್ಮ ಕೆಲಸ', 'ಪ್ರಶ್ನೆಗಳು', 'ಸಂಪರ್ಕ'],
    eyebrow: 'ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ · ಡಿಜಿಟಲ್ ಭೂಮಾಪನ',
    headline: 'ಪ್ರತಿಯೊಂದು ಅಳತೆಯಲ್ಲೂ ನಿಖರತೆ. ಪ್ರತಿಯೊಂದು ಯೋಜನೆಯಲ್ಲೂ ವಿಶ್ವಾಸ.',
    intro: 'ಬಳ್ಳಾರಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡಿಜಿಪಿಎಸ್ ಆಧಾರಿತ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ ಸೇವೆಗಳು.',
    whatsapp: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ', call: 'ಈಗ ಕರೆ ಮಾಡಿ', explore: 'ಸೇವೆಗಳು ನೋಡಿ',
    scroll: 'ಮುಂದೆ ವೀಕ್ಷಿಸಿ', label: 'ನಿಖರತೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಸೇವೆಗೆ ಆದ್ಯತೆ',
    serviceStrip: ['ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ', 'ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡ್ರಾಯಿಂಗ್', 'ಡಿಜಿಪಿಎಸ್ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ', 'ಬಳ್ಳಾರಿ ಮತ್ತು ಹತ್ತಿರದ ಪ್ರದೇಶಗಳು'],
    aboutEyebrow: 'SSMV ಬಗ್ಗೆ', aboutTitle: 'ಎಂಜಿನಿಯರಿಂಗ್ ಜ್ಞಾನ. ಭೂಮಾಪನ ನಿಖರತೆ.',
    aboutText: 'SSMV Consultant And Land Surveyors ವತಿಯಿಂದ ಬಳ್ಳಾರಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಭೂಮಾಪನ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ. ಪ್ರಾಯೋಗಿಕ ತಾಂತ್ರಿಕ ಸೇವೆ, ಎಚ್ಚರಿಕೆಯ ಕ್ಷೇತ್ರಕಾರ್ಯ ಮತ್ತು ಸ್ಪಷ್ಟ ಸಂವಹನದ ಮೂಲಕ ಗ್ರಾಹಕರಿಗೆ ಸಹಾಯ ಮಾಡುವುದೇ ನಮ್ಮ ಉದ್ದೇಶ.',
    aboutNote: 'ಪ್ರತಿಯೊಂದು ಸ್ಥಳವೂ ವಿಭಿನ್ನವಾಗಿರುತ್ತದೆ. ಮೊದಲು ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ತಿಳಿದುಕೊಂಡು, ಕೆಲಸಕ್ಕೆ ಸೂಕ್ತವಾದ ವಿಧಾನವನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ.',
    principles: ['ನಿಖರ ಅಳತೆಗೆ ಆದ್ಯತೆ', 'ಪ್ರಾಯೋಗಿಕ ವೃತ್ತಿಪರ ಸೇವೆ', 'ಸ್ಥಳದ ಅಗತ್ಯಗಳಿಗೆ ಗಮನ', 'ಸ್ಪಷ್ಟ ಸಂವಹನ'],
    servicesEyebrow: 'ನಮ್ಮ ಸೇವೆಗಳು', servicesTitle: 'ನಿಮ್ಮ ಮುಂದಿನ ಹಂತಕ್ಕೆ ತಾಂತ್ರಿಕ ಬೆಂಬಲ.',
    servicesIntro: 'ನಿಮ್ಮ ಸ್ಥಳ, ಯೋಜನೆ ಮತ್ತು ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾದ ಸ್ಪಷ್ಟ ಹಾಗೂ ಪ್ರಾಯೋಗಿಕ ಸೇವೆಗಳು.',
    learnMore: 'ಈ ಸೇವೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ',
    serviceDescriptions: [
      'ಯೋಜನೆಯ ಅಗತ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಸ್ಥಳಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಅಂಶಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಮತ್ತು ಮುಂದಿನ ಹಂತಗಳನ್ನು ಯೋಜಿಸಲು ವೃತ್ತಿಪರ ಸಲಹೆ.',
      'ಯೋಜನೆ ಚರ್ಚೆ, ಲೇಔಟ್ ವಿವರಗಳು ಮತ್ತು ಅಗತ್ಯಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸಲು ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಹಾಗೂ ಡ್ರಾಯಿಂಗ್ ಸೇವೆಗಳು.',
      'ಭೂಮಾಪನ, ನಕ್ಷೆ ಮತ್ತು ಸ್ಥಳಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಅಗತ್ಯಗಳಿಗೆ ಸ್ಥಾನಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲು ಡಿಜಿಪಿಎಸ್ ಆಧಾರಿತ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ.'
    ],
    serviceBenefits: [
      ['ಯೋಜನೆಯ ಅಗತ್ಯಗಳ ಚರ್ಚೆ', 'ಸ್ಥಳಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ತಾಂತ್ರಿಕ ಅಂಶಗಳು', 'ಪ್ರಾಯೋಗಿಕ ಯೋಜನಾ ಬೆಂಬಲ'],
      ['ಸ್ಪಷ್ಟ ದೃಶ್ಯ ನಿರೂಪಣೆ', 'ಒಪ್ಪಿಕೊಂಡ ಅಗತ್ಯಗಳಿಗೆ ತಕ್ಕ ಡ್ರಾಯಿಂಗ್', 'ಲೇಔಟ್ ಮತ್ತು ವಿನ್ಯಾಸದ ಸ್ಪಷ್ಟತೆ'],
      ['ಡಿಜಿಟಲ್ ಕ್ಷೇತ್ರದ ಮಾಹಿತಿ ಸಂಗ್ರಹ', 'ನಕ್ಷೆ ಮತ್ತು ಸ್ಥಳ ಯೋಜನೆಗೆ ಬೆಂಬಲ', 'ಕೆಲಸಕ್ಕೆ ತಕ್ಕ ವಿಧಾನ ಆಯ್ಕೆ']
    ],
    whyEyebrow: 'SSMV ಕಾರ್ಯವಿಧಾನ', whyTitle: 'ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಕಾಳಜಿಗೆ ಆದ್ಯತೆ.',
    whyText: 'ತಾಂತ್ರಿಕ ಕೆಲಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸುಲಭವಾಗಿರಬೇಕು. ಯೋಜನೆಗೆ ತಕ್ಕ ವಿಧಾನ, ಸ್ಪಷ್ಟ ಸಂಭಾಷಣೆ ಮತ್ತು ಸೂಕ್ತ ಸೇವೆಗೆ ನಾವು ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.',
    whyItems: [
      ['ನಿಖರತೆಗೆ ಆದ್ಯತೆ', 'ಪ್ರತಿ ಕೆಲಸಕ್ಕೂ ಸೂಕ್ತ ವಿಧಾನ ಮತ್ತು ಎಚ್ಚರಿಕೆಯ ಅಳತೆಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.'],
      ['ಪ್ರಾಯೋಗಿಕ ಸೇವೆಗಳು', 'ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಭೂಮಾಪನ ಸೇವೆಗಳು.'],
      ['ಸರಳ ಸಂವಹನ', 'ನಿಮ್ಮ ಅಗತ್ಯ ಮತ್ತು ಮುಂದಿನ ಹಂತಗಳನ್ನು ನೇರವಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಚರ್ಚಿಸಿ.'],
      ['ಸ್ಥಳೀಯ ಸೇವೆ, ಹೊಂದಿಕೊಳ್ಳುವ ವ್ಯಾಪ್ತಿ', 'ಬಳ್ಳಾರಿ ಮತ್ತು ಹತ್ತಿರದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆ; ಇತರ ಸ್ಥಳಗಳ ಬಗ್ಗೆ ಚರ್ಚಿಸಬಹುದು.'],
      ['ಅತಿರಂಜಿತ ಭರವಸೆಗಳಿಲ್ಲ', 'ಪ್ರತಿ ಯೋಜನೆಯ ವ್ಯಾಪ್ತಿ, ನಿಖರತೆ, ಫಲಿತಾಂಶ ಮತ್ತು ಲಭ್ಯತೆಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಚರ್ಚಿಸಲಾಗುತ್ತದೆ.']
    ],
    processEyebrow: 'ಕೆಲಸದ ವಿಧಾನ', processTitle: 'ವಿಚಾರಣೆಯಿಂದ ಕೆಲಸದ ವಿತರಣೆಯವರೆಗೆ ಸ್ಪಷ್ಟ ಹಂತಗಳು.',
    process: [
      ['ಆರಂಭಿಕ ವಿಚಾರಣೆ', 'ಫೋನ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ, ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ತಿಳಿಸಿ.'],
      ['ಅಗತ್ಯಗಳ ಚರ್ಚೆ', 'ಸೇವೆ, ಯೋಜನೆಯ ಸ್ಥಳ, ಉದ್ದೇಶ ಮತ್ತು ಸಂಬಂಧಿತ ವಿವರಗಳನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ.'],
      ['ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಯೋಜನೆ', 'ಸೂಕ್ತ ವಿಧಾನ, ಅಗತ್ಯ ಮಾಹಿತಿ ಮತ್ತು ಮುಂದಿನ ಹಂತಗಳನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ.'],
      ['ಸೇವೆಯ ವಿತರಣೆ', 'ಒಪ್ಪಿಕೊಂಡ ಕೆಲಸವನ್ನು ನಿರ್ವಹಿಸಿ, ಸಂಬಂಧಿತ ಫಲಿತಾಂಶಗಳನ್ನು ತಿಳಿಸುತ್ತೇವೆ.']
    ],
    galleryEyebrow: 'ಕ್ಷೇತ್ರದ ಚಿತ್ರಗಳು', galleryTitle: 'ಕೆಲಸದ ಸಂದರ್ಭವನ್ನು ನೋಡಿ.',
    galleryText: 'ಇವು ಸೇವೆಯ ಸ್ವರೂಪವನ್ನು ವಿವರಿಸುವ ಮಾದರಿ ಚಿತ್ರಗಳು ಮಾತ್ರ. ಇವುಗಳನ್ನು SSMV ಪೂರ್ಣಗೊಳಿಸಿದ ಯೋಜನೆಗಳೆಂದು ತೋರಿಸಲಾಗಿಲ್ಲ.',
    galleryCategories: ['ಎಲ್ಲವೂ', 'ಕ್ಷೇತ್ರ ಸಮೀಕ್ಷೆ', 'ಡಿಜಿಪಿಎಸ್ ಉಪಕರಣ', 'ಕಟ್ಟಡದ ಡ್ರಾಯಿಂಗ್'],
    faqsEyebrow: 'ತಿಳಿದುಕೊಳ್ಳಿ', faqsTitle: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು.',
    faqs: [
      ['SSMV ಯಾವ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ?', 'ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡ್ರಾಯಿಂಗ್ ಸೇವೆಗಳು ಹಾಗೂ ಡಿಜಿಪಿಎಸ್ ಆಧಾರಿತ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ನಿಮಗೆ ಬೇಕಾದ ನಿಖರ ಕೆಲಸದ ವ್ಯಾಪ್ತಿಯನ್ನು ಚರ್ಚಿಸಲು ಸಂಪರ್ಕಿಸಿ.'],
      ['ಡಿಜಿಪಿಎಸ್ ಆಧಾರಿತ ಭೂಮಾಪನ ಎಂದರೇನು?', 'ಡಿಜಿಪಿಎಸ್ ಉಪಗ್ರಹ ಸ್ಥಾನಮಾಹಿತಿಗೆ ತಿದ್ದುಪಡಿ ಮಾಹಿತಿಯನ್ನು ಬಳಸಿ ಅಳತೆಗಳ ನಿಖರತೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ. ಸೂಕ್ತ ವಿಧಾನವು ಉಪಕರಣ, ತಿದ್ದುಪಡಿ ಸೇವೆ, ಸ್ಥಳದ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಸಮೀಕ್ಷೆಯ ಅಗತ್ಯಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ.'],
      ['ಡಿಜಿಪಿಎಸ್ ಭೂಮಾಪನದ ನಿಖರತೆ ಎಷ್ಟು?', 'ಸೂಕ್ತ ಉಪಕರಣ, ತಿದ್ದುಪಡಿ ಸೇವೆ, ವಿಧಾನ ಮತ್ತು ಕ್ಷೇತ್ರದ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಸೆಂಟಿಮೀಟರ್ ಮಟ್ಟದ ಫಲಿತಾಂಶ ಸಾಧ್ಯವಾಗಬಹುದು. ಪ್ರತಿಯೊಂದು ಕೆಲಸಕ್ಕೂ ಈ ನಿಖರತೆಯನ್ನು ಖಾತರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ.'],
      ['ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡ್ರಾಯಿಂಗ್ ಮಾಡುತ್ತೀರಾ?', 'ಹೌದು, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡ್ರಾಯಿಂಗ್ ನಮ್ಮ ಸೇವೆಗಳಲ್ಲಿ ಸೇರಿವೆ. ಕೆಲಸ ಆರಂಭಿಸುವ ಮೊದಲು ಬೇಕಾದ ಡ್ರಾಯಿಂಗ್ ಪ್ರಕಾರ ಮತ್ತು ವ್ಯಾಪ್ತಿಯನ್ನು ಚರ್ಚಿಸಬೇಕು.'],
      ['ಬಳ್ಳಾರಿಯ ಹೊರಗೂ ಸೇವೆ ಇದೆಯೇ?', 'ನಮ್ಮ ಪ್ರಮುಖ ಸೇವಾ ಪ್ರದೇಶ ಬಳ್ಳಾರಿ ಮತ್ತು ಹತ್ತಿರದ ಪ್ರದೇಶಗಳು. ಇತರ ಸ್ಥಳಗಳ ಸೇವಾ ಲಭ್ಯತೆಯ ಬಗ್ಗೆ ಸಂಪರ್ಕಿಸಿ.'],
      ['ಭೂಮಾಪನಕ್ಕೂ ಮೊದಲು ಯಾವ ಮಾಹಿತಿ ನೀಡಬೇಕು?', 'ಯೋಜನೆಯ ಸ್ಥಳ, ಸಮೀಕ್ಷೆಯ ಉದ್ದೇಶ, ಲಭ್ಯವಿರುವ ಸ್ಥಳದ ದಾಖಲೆಗಳು ಮತ್ತು ಬೇಕಾದ ಫಲಿತಾಂಶದ ವಿವರ ಸಹಾಯಕವಾಗುತ್ತವೆ. ಅಗತ್ಯವನ್ನು ಚರ್ಚಿಸುವ ಮೊದಲು ಸೂಕ್ಷ್ಮ ದಾಖಲೆಗಳನ್ನು ಕಳುಹಿಸಬೇಡಿ.'],
      ['ದರದ ಅಂದಾಜು ಹೇಗೆ ಪಡೆಯಬಹುದು?', 'ನಿಮ್ಮ ಅಗತ್ಯ ಮತ್ತು ಸ್ಥಳದ ಚಿಕ್ಕ ವಿವರಣೆಯೊಂದಿಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ. ದರವು ಕೆಲಸದ ವ್ಯಾಪ್ತಿ ಮತ್ತು ವಿವರಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ.'],
      ['SSMV ಅನ್ನು ಹೇಗೆ ಸಂಪರ್ಕಿಸಬಹುದು?', 'ಈ ವೆಬ್‌ಸೈಟ್‌ನ ಕರೆ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಲಿಂಕ್ ಬಳಸಿ. ಫಾರ್ಮ್ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ವಾಟ್ಸಾಪ್ ಸಂದೇಶವನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತದೆ; ನಿಮ್ಮ ಅನುಮತಿಯಿಲ್ಲದೆ ಸಂದೇಶ ಕಳುಹಿಸುವುದಿಲ್ಲ.']
    ],
    areaEyebrow: 'ಸ್ಥಳೀಯ ಸೇವೆ', areaTitle: 'ಬಳ್ಳಾರಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆಗಳು.',
    areaText: 'ಬಳ್ಳಾರಿಯಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಅಥವಾ ಡಿಜಿಪಿಎಸ್ ಆಧಾರಿತ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ ಬೇಕೇ? ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ಚರ್ಚಿಸಲು ಸಂಪರ್ಕಿಸಿ. ಇತರ ಸ್ಥಳಗಳ ಲಭ್ಯತೆಯನ್ನು ನೇರವಾಗಿ ದೃಢಪಡಿಸಬಹುದು.',
    contactEyebrow: 'ಸಂಪರ್ಕಿಸೋಣ', contactTitle: 'ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ಚರ್ಚಿಸೋಣ.',
    contactText: 'ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ತಿಳಿಸಿ. ಮುಂದಿನ ಸೂಕ್ತ ಹಂತವನ್ನು ಚರ್ಚಿಸಲು ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಬಳಸುತ್ತೇವೆ.',
    name: 'ಪೂರ್ಣ ಹೆಸರು', mobile: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ', service: 'ಬೇಕಾದ ಸೇವೆ', location: 'ಸ್ಥಳ / ಯೋಜನೆಯ ಸ್ಥಳ', details: 'ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ', preferred: 'ಆದ್ಯತೆಯ ಸಂಪರ್ಕ ವಿಧಾನ',
    chooseService: 'ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ', servicesOptions: ['ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ', 'ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡ್ರಾಯಿಂಗ್', 'ಡಿಜಿಪಿಎಸ್ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ', 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ'],
    phoneOption: 'ಫೋನ್ ಕರೆ', waOption: 'ವಾಟ್ಸಾಪ್', formSend: 'ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಸಿದ್ಧಪಡಿಸಿ', formHint: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಳುಹಿಸುವುದಿಲ್ಲ. ಪರಿಶೀಲಿಸಿ ಕಳುಹಿಸಲು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕರಡು ಸಂದೇಶ ತೆರೆಯುತ್ತದೆ.',
    privacy: 'ನೀವು ನಮೂದಿಸುವ ಮಾಹಿತಿಯನ್ನು ವಿಚಾರಣೆ ಸಂದೇಶ ಸಿದ್ಧಪಡಿಸಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಯಾವುದನ್ನೂ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.',
    footerText: 'ಬಳ್ಳಾರಿ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ, ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಭೂಮಾಪನ.',
    quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು', ourServices: 'ಸೇವೆಗಳು', reachUs: 'ಸಂಪರ್ಕಿಸಿ', directions: 'ದಾರಿ ಪಡೆಯಿರಿ',
    copyright: 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.', illustrative: 'ಮಾದರಿ ಚಿತ್ರ', close: 'ಮುಚ್ಚಿ', menu: 'ನ್ಯಾವಿಗೇಶನ್ ಮೆನು ತೆರೆಯಿರಿ',
    required: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಸೇವೆಯನ್ನು ನಮೂದಿಸಿ.', invalidPhone: 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.',
    ready: 'ನಿಮ್ಮ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಸಿದ್ಧವಾಗಿದೆ. ಕಳುಹಿಸುವ ಮೊದಲು ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
    contact: 'SSMV ಸಂಪರ್ಕ', addressLabel: 'ಕಚೇರಿ ವಿಳಾಸ', serviceArea: 'ಸೇವಾ ಪ್ರದೇಶ', locationText: 'ಬಳ್ಳಾರಿ, ಕರ್ನಾಟಕ ಮತ್ತು ಹತ್ತಿರದ ಪ್ರದೇಶಗಳು',
    precisionCaveat: 'ಸಮೀಕ್ಷೆಯ ನಿಖರತೆ ಉಪಕರಣ, ವಿಧಾನ, ತಿದ್ದುಪಡಿ ಸೇವೆಗಳು ಮತ್ತು ಕ್ಷೇತ್ರದ ಪರಿಸ್ಥಿತಿಗಳ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ. ಪ್ರತಿ ಕೆಲಸದ ಫಲಿತಾಂಶ ಮತ್ತು ವ್ಯಾಪ್ತಿಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಒಪ್ಪಿಕೊಳ್ಳಲಾಗುತ್ತದೆ.'
  }
} as const;

const services = [
  { icon: DraftingCompass, number: '01', titleEn: 'Engineering consultancy', titleKn: 'ಎಂಜಿನಿಯರಿಂಗ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ', image: 'https://images.unsplash.com/photo-1503387762-592adece3b0f?auto=format&fit=crop&w=1000&q=85' },
  { icon: Ruler, number: '02', titleEn: 'Building sketches & drawings', titleKn: 'ಕಟ್ಟಡದ ಸ್ಕೆಚ್ ಮತ್ತು ಡ್ರಾಯಿಂಗ್', image: 'https://images.unsplash.com/photo-1503387762-592adece3b0f?auto=format&fit=crop&w=1000&q=85' },
  { icon: MapPinned, number: '03', titleEn: 'DGPS digital land surveying', titleKn: 'ಡಿಜಿಪಿಎಸ್ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ', image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=85' }
];
const gallery = [
  { category: 1, labelEn: 'Surveying in the field', labelKn: 'ಕ್ಷೇತ್ರ ಸಮೀಕ್ಷೆ', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { category: 2, labelEn: 'Survey equipment', labelKn: 'ಸಮೀಕ್ಷಾ ಉಪಕರಣ', image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85' },
  { category: 3, labelEn: 'Architectural drawings', labelKn: 'ವಾಸ್ತುಶಿಲ್ಪ ಡ್ರಾಯಿಂಗ್', image: 'https://images.unsplash.com/photo-1503387762-592adece3b0f?auto=format&fit=crop&w=1200&q=85' },
  { category: 1, labelEn: 'Land and site context', labelKn: 'ಭೂಮಿ ಮತ್ತು ಸ್ಥಳದ ಸಂದರ್ಭ', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85' }
];
const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [galleryFilter, setGalleryFilter] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [notice, setNotice] = useState('');
  const [form, setForm] = useState({ name: '', mobile: '', service: '', location: '', details: '', preferred: 'WhatsApp' });
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'en'
      ? 'SSMV Consultant And Land Surveyors | DGPS Land Surveying in Ballari'
      : 'SSMV Consultant And Land Surveyors | ಬಳ್ಳಾರಿಯಲ್ಲಿ ಡಿಜಿಟಲ್ ಭೂಮಾಪನ';
  }, [lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const serviceMessage = (service: string) => lang === 'en'
    ? `Hello SSMV Consultant And Land Surveyors, I would like to enquire about ${service}. Please let me know the next steps.`
    : `ನಮಸ್ಕಾರ SSMV Consultant And Land Surveyors, ನನಗೆ ${service} ಕುರಿತು ವಿಚಾರಿಸಬೇಕಿದೆ. ಮುಂದಿನ ಹಂತಗಳನ್ನು ತಿಳಿಸಿ.`;
  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const submitForm = (e: FormEvent) => {
    e.preventDefault(); setNotice('');
    if (!form.name.trim() || !form.mobile.trim() || !form.service) { setNotice(t.required); return; }
    const digits = form.mobile.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) { setNotice(t.invalidPhone); return; }
    const message = lang === 'en'
      ? `Hello SSMV Consultant And Land Surveyors, I would like to make an enquiry.\n\nName: ${form.name}\nMobile: ${form.mobile}\nService: ${form.service}\nProject location: ${form.location || 'Not specified'}\nPreferred contact: ${form.preferred}\nDetails: ${form.details || 'Not specified'}\n\nPlease let me know the next steps.`
      : `ನಮಸ್ಕಾರ SSMV Consultant And Land Surveyors, ನನಗೆ ವಿಚಾರಣೆ ಸಲ್ಲಿಸಬೇಕಿದೆ.\n\nಹೆಸರು: ${form.name}\nಮೊಬೈಲ್: ${form.mobile}\nಸೇವೆ: ${form.service}\nಯೋಜನೆಯ ಸ್ಥಳ: ${form.location || 'ನಮೂದಿಸಿಲ್ಲ'}\nಸಂಪರ್ಕ ವಿಧಾನ: ${form.preferred}\nವಿವರಗಳು: ${form.details || 'ನಮೂದಿಸಿಲ್ಲ'}\n\nಮುಂದಿನ ಹಂತಗಳನ್ನು ತಿಳಿಸಿ.`;
    setNotice(t.ready);
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return <div className={`site ${lang === 'kn' ? 'is-kannada' : ''}`}>
    <div className="topline"><div className="container topline-inner"><span><LocateFixed size={13}/>{lang === 'en' ? 'BALLARI, KARNATAKA, INDIA' : 'ಬಳ್ಳಾರಿ, ಕರ್ನಾಟಕ, ಭಾರತ'}</span><span className="topline-right"><span><Clock3 size={13}/>{lang === 'en' ? 'Contact us for availability' : 'ಸೇವೆಯ ಲಭ್ಯತೆಗೆ ಸಂಪರ್ಕಿಸಿ'}</span><a href={`tel:${PHONE}`}><Phone size={13}/>{PHONE}</a></span></div></div>
    <header className="header"><div className="container header-inner">
      <a className="brand" href="#home" aria-label="SSMV home" onClick={(e) => {e.preventDefault(); goTo('home');}}><span className="brand-mark"><Crosshair size={28}/><span> S</span></span><span className="brand-copy"><strong>SSMV</strong><small>CONSULTANT AND<br/>LAND SURVEYORS</small></span></a>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">{t.nav.map((label, i) => <button key={label} onClick={() => goTo(['home','about','services','work','faq','contact'][i])} className={i === 0 ? 'nav-active' : ''}>{label}</button>)}<a className="nav-mobile-contact" href={whatsappLink(serviceMessage('general services'))} target="_blank" rel="noreferrer"><MessageCircle size={16}/>{t.whatsapp}</a></nav>
      <div className="header-actions"><div className="language-switch" aria-label="Choose language"><button className={lang === 'en' ? 'selected' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'kn' ? 'selected' : ''} onClick={() => setLang('kn')}>ಕನ್ನಡ</button></div><a className="header-cta" href={whatsappLink(serviceMessage('general services'))} target="_blank" rel="noreferrer"><MessageCircle size={16}/><span>{t.whatsapp}</span><ArrowUpRight size={14}/></a></div>
      <button className="menu-toggle" aria-label={t.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div></header>

    <main>
      <section className="hero" id="home"><div className="hero-grid"></div><div className="container hero-layout"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"></span>{t.eyebrow}</div><h1>{t.headline.split('. ')[0]}. <em>{t.headline.split('. ').slice(1).join('. ')}</em></h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-primary" href={whatsappLink(serviceMessage('general services'))} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.whatsapp}<ArrowUpRight size={16}/></a><button className="button button-ghost" onClick={() => goTo('services')}>{t.explore}<ArrowDownRight size={17}/></button></div><a className="hero-call" href={`tel:${PHONE}`}><span className="call-icon"><Phone size={16}/></span><span><small>{lang === 'en' ? 'Prefer a call?' : 'ಕರೆ ಮಾಡಲು ಇಷ್ಟವೇ?'}</small><strong>{t.call} · +91 9480112556</strong></span><ArrowUpRight size={15}/></a></div>
      <div className="hero-visual"><div className="hero-photo-wrap"><img className="hero-photo" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90" alt={lang === 'en' ? 'Surveying and site work in an open field' : 'ತೆರೆದ ಸ್ಥಳದಲ್ಲಿ ಸಮೀಕ್ಷೆ ಮತ್ತು ಕ್ಷೇತ್ರಕಾರ್ಯ'} fetchPriority="high"/><div className="photo-grade"></div><div className="photo-coordinate"><Crosshair size={14}/><span>15°08′ N<br/>76°55′ E</span></div><div className="photo-caption"><span className="caption-line"></span><span>{lang === 'en' ? 'MEASURE WITH INTENTION' : 'ಉದ್ದೇಶಪೂರ್ವಕ ಅಳತೆ'}</span></div></div><div className="hero-stamp"><div className="stamp-ring"><Crosshair size={25}/></div><span>SSMV</span><small>{lang === 'en' ? 'FIELD · PLAN · PRECISION' : 'ಕ್ಷೇತ್ರ · ಯೋಜನೆ · ನಿಖರತೆ'}</small></div><div className="hero-index"><span>01</span><i></i><span>04</span></div></div></div><div className="container hero-bottom"><span>{t.scroll}</span><span className="scroll-line"></span><span className="hero-bottom-right">{t.label}</span></div></section>

      <section className="service-ribbon"><div className="container ribbon-grid">{t.serviceStrip.map((s, i) => <div className="ribbon-item" key={s}><span className="ribbon-num">0{i + 1}</span><span>{s}</span><ArrowUpRight size={14}/></div>)}</div></section>

      <section className="section about-section" id="about"><div className="container about-grid"><div className="section-side"><div className="eyebrow eyebrow-dark"><span className="eyebrow-line"></span>{t.aboutEyebrow}</div><div className="section-index">01 <span>—</span> 04</div><div className="side-ornament"><div></div><div></div><div></div></div></div><div className="about-main"><h2>{t.aboutTitle}</h2><p className="lead">{t.aboutText}</p><div className="about-note"><span className="note-icon"><Target size={21}/></span><p>{t.aboutNote}</p></div><div className="principle-grid">{t.principles.map((p, i) => <div className="principle" key={p}><Check size={16}/><span>{p}</span></div>)}</div></div><div className="about-aside"><div className="aside-image"><img src="https://images.unsplash.com/photo-1503387762-592adece3b0f?auto=format&fit=crop&w=900&q=80" alt={lang === 'en' ? 'Architectural planning and technical drawing' : 'ವಾಸ್ತುಶಿಲ್ಪ ಯೋಜನೆ ಮತ್ತು ತಾಂತ್ರಿಕ ಡ್ರಾಯಿಂಗ್'} loading="lazy"/><span className="image-label">{lang === 'en' ? 'PLANNING WITH CLARITY' : 'ಸ್ಪಷ್ಟ ಯೋಜನೆ'}</span></div><div className="aside-coordinate"><span>SSMV / 001</span><span>— {lang === 'en' ? 'ENGINEERING' : 'ಎಂಜಿನಿಯರಿಂಗ್'}</span></div></div></div></section>

      <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"></span>{t.servicesEyebrow}</div><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div><div className="services-grid">{services.map((service, i) => { const Icon = service.icon; return <article className={`service-card service-card-${i + 1}`} key={service.number}><div className="service-card-top"><span>{service.number} / 03</span><Icon size={22}/></div><div className="service-image"><img src={service.image} alt={lang === 'en' ? service.titleEn : service.titleKn} loading="lazy"/><div className="service-image-overlay"></div><span className="service-image-label">{i === 2 ? 'DGPS / GNSS' : i === 1 ? 'PLAN / DRAW' : 'CONSULT / PLAN'}</span></div><div className="service-card-content"><h3>{lang === 'en' ? service.titleEn : service.titleKn}</h3><p>{t.serviceDescriptions[i]}</p><ul>{t.serviceBenefits[i].map(b => <li key={b}><span className="mini-dot"></span>{b}</li>)}</ul><a className="text-link" href={whatsappLink(serviceMessage(lang === 'en' ? service.titleEn : service.titleKn))} target="_blank" rel="noreferrer">{t.learnMore}<ArrowUpRight size={16}/></a></div></article>; })}</div><p className="precision-note"><ShieldCheck size={17}/>{t.precisionCaveat}</p></div></section>

      <section className="approach-section"><div className="approach-image"><img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85" alt={lang === 'en' ? 'Natural landscape illustrating land and site context' : 'ಭೂಮಿ ಮತ್ತು ಸ್ಥಳದ ಸಂದರ್ಭವನ್ನು ತೋರಿಸುವ ಭೂದೃಶ್ಯ'} loading="lazy"/><div className="approach-image-shade"></div><div className="approach-image-note"><Crosshair size={16}/><span>FIELD NOTES / SSMV</span></div></div><div className="approach-content"><div className="eyebrow"><span className="eyebrow-line"></span>{t.whyEyebrow}</div><h2>{t.whyTitle}</h2><p className="approach-intro">{t.whyText}</p><div className="why-list">{t.whyItems.map((item, i) => <div className="why-item" key={item[0]}><span className="why-num">0{i + 1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div><ArrowUpRight size={16}/></div>)}</div></div></section>

      <section className="section process-section"><div className="container"><div className="section-heading"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-line"></span>{t.processEyebrow}</div><h2>{t.processTitle}</h2></div><div className="process-mark"><Compass size={40}/><span>METHOD / 04</span></div></div><div className="process-grid">{t.process.map((step, i) => <div className="process-card" key={step[0]}><div className="process-card-top"><span>0{i + 1}</span>{i < 3 && <span className="process-connector"></span>}</div><div className="process-icon">{[<MessageCircle/>, <ClipboardCheck/>, <Map/>, <Check/>][i]}</div><h3>{step[0]}</h3><p>{step[1]}</p></div>)}</div><p className="process-footnote">{lang === 'en' ? 'The exact process depends on the type and agreed scope of the service.' : 'ನಿಖರ ಕಾರ್ಯವಿಧಾನವು ಸೇವೆಯ ಪ್ರಕಾರ ಮತ್ತು ಒಪ್ಪಿಕೊಂಡ ವ್ಯಾಪ್ತಿಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ.'}</p></div></section>

      <section className="section gallery-section" id="work"><div className="container"><div className="section-heading gallery-heading"><div><div className="eyebrow"><span className="eyebrow-line"></span>{t.galleryEyebrow}</div><h2>{t.galleryTitle}</h2></div><p>{t.galleryText}</p></div><div className="gallery-filters">{t.galleryCategories.map((c, i) => <button className={galleryFilter === i ? 'filter-active' : ''} key={c} onClick={() => setGalleryFilter(i)}>{c}<span>0{i + 1}</span></button>)}</div><div className="gallery-grid">{gallery.filter(g => galleryFilter === 0 || g.category === galleryFilter).map((item, i) => <button className={`gallery-item gallery-item-${i + 1}`} key={item.image} onClick={() => setLightbox(item.image)} aria-label={`${lang === 'en' ? item.labelEn : item.labelKn} — ${t.illustrative}`}><img src={item.image} alt={`${lang === 'en' ? item.labelEn : item.labelKn} — ${t.illustrative}`} loading="lazy"/><span className="gallery-shade"></span><span className="gallery-number">0{i + 1}</span><span className="gallery-caption"><span>{lang === 'en' ? item.labelEn : item.labelKn}</span><small>{t.illustrative}</small></span><span className="gallery-open"><ArrowUpRight size={19}/></span></button>)}</div></div></section>

      <section className="faq-section section" id="faq"><div className="container faq-grid"><div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line"></span>{t.faqsEyebrow}</div><h2>{t.faqsTitle}</h2><p>{lang === 'en' ? 'Still have a question? Talk directly with us about your site or project.' : 'ಇನ್ನೂ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಿಮ್ಮ ಸ್ಥಳ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ನೇರವಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ.'}</p><a href={whatsappLink(serviceMessage('general enquiry'))} className="button button-primary" target="_blank" rel="noreferrer"><MessageCircle size={17}/>{t.contact}<ArrowUpRight size={15}/></a><div className="faq-count">08 <span>— FAQ</span></div></div><div className="faq-list">{t.faqs.map((faq, i) => <div className={`faq-item ${activeFaq === i ? 'faq-open' : ''}`} key={faq[0]}><button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i}><span><small>0{i + 1}</small>{faq[0]}</span><ChevronDown size={18}/></button>{activeFaq === i && <div className="faq-answer"><p>{faq[1]}</p></div>}</div>)}</div></div></section>

      <section className="area-section"><div className="area-grid-lines"></div><div className="container area-inner"><div className="area-copy"><div className="eyebrow"><span className="eyebrow-line"></span>{t.areaEyebrow}</div><h2>{t.areaTitle}</h2><p>{t.areaText}</p><a className="area-link" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPinned size={17}/>{t.directions}<ArrowUpRight size={15}/></a></div><div className="area-address"><span className="address-label"><LocateFixed size={15}/>{t.addressLabel}</span><p>{ADDRESS}</p><span className="address-rule"></span><span className="address-label"><MapPinned size={15}/>{t.serviceArea}</span><p>{t.locationText}</p><a href={`tel:${PHONE}`} className="area-phone"><Phone size={16}/>{PHONE}<ArrowUpRight size={15}/></a></div></div></section>

      <section className="contact-section section" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow eyebrow-dark"><span className="eyebrow-line"></span>{t.contactEyebrow}</div><h2>{t.contactTitle}</h2><p className="contact-intro">{t.contactText}</p><div className="contact-methods"><a href={`tel:${PHONE}`} className="contact-method"><span className="contact-method-icon"><Phone size={19}/></span><span><small>{lang === 'en' ? 'CALL DIRECTLY' : 'ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ'}</small><strong>+91 9480112556</strong></span><ArrowUpRight size={16}/></a><a href={whatsappLink(serviceMessage('general enquiry'))} target="_blank" rel="noreferrer" className="contact-method"><span className="contact-method-icon"><MessageCircle size={19}/></span><span><small>WHATSAPP</small><strong>{lang === 'en' ? 'Start a conversation' : 'ಸಂಭಾಷಣೆ ಪ್ರಾರಂಭಿಸಿ'}</strong></span><ArrowUpRight size={16}/></a></div><div className="contact-address"><MapPinned size={17}/><div><small>{t.addressLabel}</small><p>{ADDRESS}</p><a href={MAPS_URL} target="_blank" rel="noreferrer">{t.directions} <ArrowUpRight size={13}/></a></div></div></div>
      <form className="contact-form" onSubmit={submitForm} noValidate><div className="form-heading"><span>{lang === 'en' ? 'ENQUIRY FORM' : 'ವಿಚಾರಣೆ ಫಾರ್ಮ್'}</span><span>SSMV / CONTACT</span></div><div className="form-row"><label>{t.name} <b>*</b><input value={form.name} onChange={e => setForm({...form, name:e.target.value})} autoComplete="name" placeholder={lang === 'en' ? 'Your name' : 'ನಿಮ್ಮ ಹೆಸರು'} /></label><label>{t.mobile} <b>*</b><input value={form.mobile} onChange={e => setForm({...form, mobile:e.target.value})} autoComplete="tel" inputMode="tel" placeholder="+91" /></label></div><label>{t.service} <b>*</b><select value={form.service} onChange={e => setForm({...form, service:e.target.value})}><option value="">{t.chooseService}</option>{t.servicesOptions.map(s => <option key={s} value={s}>{s}</option>)}</select></label><label>{t.location}<input value={form.location} onChange={e => setForm({...form, location:e.target.value})} placeholder={lang === 'en' ? 'Town / site location' : 'ಊರು / ಸ್ಥಳದ ವಿಳಾಸ'} /></label><label>{t.details}<textarea value={form.details} onChange={e => setForm({...form, details:e.target.value})} rows={3} placeholder={lang === 'en' ? 'A few details about your requirement…' : 'ನಿಮ್ಮ ಅಗತ್ಯದ ಬಗ್ಗೆ ಕೆಲವು ವಿವರಗಳು…'} /></label><fieldset><legend>{t.preferred}</legend><label className="radio-option"><input type="radio" name="preferred" checked={form.preferred === 'WhatsApp'} onChange={() => setForm({...form, preferred:'WhatsApp'})}/><span>{t.waOption}</span></label><label className="radio-option"><input type="radio" name="preferred" checked={form.preferred === 'Phone call'} onChange={() => setForm({...form, preferred:'Phone call'})}/><span>{t.phoneOption}</span></label></fieldset>{notice && <div className={`form-notice ${notice === t.ready ? 'notice-success' : 'notice-error'}`} role="status">{notice}</div>}<button type="submit" className="button button-primary form-submit"><Send size={17}/>{t.formSend}<ArrowUpRight size={15}/></button><p className="form-hint"><ShieldCheck size={15}/>{t.formHint}</p><p className="privacy-note">{t.privacy}</p></form></div></section>
    </main>

    <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand-col"><a className="brand brand-footer" href="#home" onClick={(e) => {e.preventDefault(); goTo('home');}}><span className="brand-mark"><Crosshair size={28}/><span>S</span></span><span className="brand-copy"><strong>SSMV</strong><small>CONSULTANT AND<br/>LAND SURVEYORS</small></span></a><p>{t.footerText}</p><span className="footer-location"><LocateFixed size={14}/> BALLARI · KARNATAKA · INDIA</span></div><div className="footer-links"><h3>{t.quickLinks}</h3>{t.nav.map((label, i) => <button key={label} onClick={() => goTo(['home','about','services','work','faq','contact'][i])}>{label}<ArrowUpRight size={12}/></button>)}</div><div className="footer-links"><h3>{t.ourServices}</h3>{t.serviceStrip.slice(0,3).map((label, i) => <a key={label} href={whatsappLink(serviceMessage(lang === 'en' ? services[i].titleEn : services[i].titleKn))} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={12}/></a>)}</div><div className="footer-contact"><h3>{t.reachUs}</h3><a className="footer-phone" href={`tel:${PHONE}`}>{PHONE}<ArrowUpRight size={14}/></a><a href={whatsappLink(serviceMessage('general enquiry'))} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a><a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPinned size={15}/>{t.directions}</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SSMV Consultant And Land Surveyors. {t.copyright}</span><span className="footer-bottom-right"><span>DESIGNED FOR PRECISION</span><button onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}><Languages size={14}/>{lang === 'en' ? 'ಕನ್ನಡ' : 'English'}</button><button className="back-top" onClick={() => goTo('home')} aria-label={lang === 'en' ? 'Back to top' : 'ಮೇಲಕ್ಕೆ ಹೋಗಿ'}>↑</button></span></div></div></footer>

    <div className="floating-contact"><a href={`tel:${PHONE}`} aria-label={lang === 'en' ? 'Call SSMV' : 'SSMV ಗೆ ಕರೆ ಮಾಡಿ'}><Phone size={19}/></a><a className="floating-whatsapp" href={whatsappLink(serviceMessage('general enquiry'))} target="_blank" rel="noreferrer" aria-label={t.whatsapp}><MessageCircle size={20}/></a></div>
    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.illustrative} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label={t.close}><X/></button><img src={lightbox} alt={t.illustrative} onClick={e => e.stopPropagation()}/><span>{t.illustrative}</span></div>}
  </div>;
}
