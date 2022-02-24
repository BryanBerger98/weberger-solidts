export default interface Project {
    title: string;
    subtitle: string;
    category: 'web_application' | 'website' | 'mobile_application' | 'company' | 'youtube_channel';
    type: 'professional' | 'personnal' | 'other';
    description: string;
    mainPhoto: string;
    technologies: any[];
}