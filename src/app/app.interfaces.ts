export interface RegisterRequestParams {
    name: string;
    phone_number: string;
    email: string;
    password: string;
    create_user: boolean;
    is_teacher: boolean;
}

export interface LoginRequestParams {
    email: string;
    password: string;
    create_user: boolean;
}

export interface LoginResponse {
    id: number | string;
    accessToken: string;
    email: string;
    onboarding_status: string;
}
export interface UserInfo {
    id: number | string;
    accessToken?: string;
    email: string;
    onboarding_status: string;
}

export interface JobsList {
    id: number | string;
    title: string;
    post_page_url: string;
    school_name: string;
    school_logo: any;
    location: string;
    extra_info: any;
    posted_on: string;
}

export interface JobDetails {
    id: number | string;
    title: string;
    school_name: string;
    school_link: string;
    school_logo: string;
    school_banner: string;
    location: string;
    extra_info: any;
    posted_on: string;
    description: string;
    subjects: string;
    applicants_no: string;
    about_school: AboutSchool;
}

export interface AboutSchool {
    id: number | string;
    name: string;
    description: string;
    link: string;
}

export interface TeacherProfile {
    id: number | string;
    name: string;
    title: string;
    location: string;
    banner: string;
    logo: string;
    experience: TeacherExperience[];
    education: TeacherEducation[];
    certifications: TeacherCertification[];
}

export interface TeacherExperience {
    id: number | string;
    title: string;
    duration: string;
    description: string;
}

export interface TeacherEducation {
    id: number | string;
    title: string;
    duration: string;
    description: string;
}

export interface TeacherCertification {
    id: number | string;
    title: string;
    description: string;
    credential_id: string;
}

export interface TeacherOnboarding {
    job_role: string;
    preferred_subjects: string;
    total_experience: number;
    highest_education: string;
    preferred_city: string;
    start_date: string;
}
