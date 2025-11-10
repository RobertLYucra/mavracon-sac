export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  interest: InterestType;
}

export type InterestType = 'consultoria' | 'ejecucion' | 'bienes-raices' | null;

export interface ContactInfo {
  icon: string;
  text: string;
  href: string;
  type: 'email' | 'phone' | 'location';
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const contactInfo: ContactInfo[] = [
    {
      icon: 'mail-outline',
      text: 'mavracon@gmail.com',
      href: 'mailto:mavracon@gmail.com',
      type: 'email'
    },
    {
      icon: 'call-outline',
      text: '+51 927 676 456',
      href: 'tel:+51927676456',
      type: 'phone'
    },
    {
      icon: 'location-outline',
      text: 'Ayacucho, Perú',
      href: '#',
      type: 'location'
    }
  ];

  export const socialLinks: SocialLink[] = [
    { icon: 'logo-facebook', href: '#', label: 'Facebook' },
    { icon: 'logo-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'logo-youtube', href: '#', label: 'YouTube' },
    { icon: 'logo-instagram', href: '#', label: 'Instagram' }
  ];

  export const interestOptions = [
    { value: 'consultoria' as InterestType, label: 'Consultoría' },
    { value: 'ejecucion' as InterestType, label: 'Ejecución de proyectos' },
    { value: 'bienes-raices' as InterestType, label: 'Bienes Raíces' }
  ];