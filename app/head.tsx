'use client';
import { usePathname } from 'next/navigation';

const Head = () => {

  const pathname = usePathname() as string;

  const titleFixedToShow = pathname === '/' 
    ? '' 
    : `· ${pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}`;

  const meta = {
    title: `eLMS ${titleFixedToShow}`,
    description: `A Learning Management System (LMS) is a comprehensive software platform designed to facilitate the creation, management, and delivery of educational content and training programs.`,
    keywords: 'Educational Content, Training Programs, Content Creation, Course Management, Online Learning, Delivery of Education, Training Administration, E-learning Platform, Student/ Learner Management, Assessment & Evaluation, Online Training, User Interface, Learning Modules, Course Delivery',
    type: 'website',
    baseUrl: 'https://jangesta26.vercel.app/',
  };


  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={meta.baseUrl + pathname} />
      <link rel='canonical' href={meta.baseUrl + pathname} />
      <link rel='me' href='mailto:janellgesta@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Janell Gesta' />
      <meta property='og:title' content={meta.title} />
    </>
  );
};

export default Head;
