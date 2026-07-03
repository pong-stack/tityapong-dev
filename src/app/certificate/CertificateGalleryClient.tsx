'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Calendar, MapPin, GraduationCap, Users, Trophy } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  image: string;
  issueDate: string;
  expiryDate?: string;
  skills: string[];
  description: string;
  type: 'course' | 'volunteer' | 'achievement';
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Introduction to Next.js',
    organization: 'Coursera',
    image: '/next-certificate.png',
    issueDate: 'July 2025',
    skills: ['Next.js', 'React', 'JavaScript', 'Frontend Development'],
    description:
      'Learned the fundamentals of Next.js, a popular framework for building full-stack web applications',
    type: 'course',
  },
  {
    id: 3,
    title: 'Volunteer with Business Club',
    organization: 'Faculty of Engineering',
    image: '/vollunter-bussiness.png',
    issueDate: 'Mar 2024',
    skills: ['Leadership', 'Teamwork', 'Problem Solving', 'Communication'],
    description: 'Participated in a volunteer program and learned leadership skills',
    type: 'volunteer',
  },
  {
    id: 4,
    title: 'Volunteer E-day',
    organization: 'Faculty of Engineering',
    image: '/volunteer-eday.png',
    issueDate: 'Dec 2023',
    skills: ['Management boost', 'Teamwork', 'Problem Solving', 'Communication'],
    description: 'Participated in a volunteer program and learned leadership skills',
    type: 'volunteer',
  },
  {
    id: 5,
    title: 'Volunteer with Angkor Math Competition',
    organization: 'Angkor Mathematics Cambridge',
    image: '/volunteer-math.png',
    issueDate: 'August 2023',
    skills: ['Exam Proctoring', 'Logistics Management', 'Attention to Detail', 'Communication'],
    description:
      'Assisted with the preparation and distribution of exam papers, and served as an examination invigilator for the Angkor Math Competition, ensuring a fair and organized testing environment.',
    type: 'volunteer',
  },
  {
    id: 6,
    title: 'Intern Program With Spring batch 20',
    organization: 'Spring Education Center',
    image: '/intern-program.jpg',
    issueDate: 'August 2023',
    skills: ['Marketing', 'Communication', 'Teamwork', 'Problem Solving'],
    description:
      'Interned at Spring Education Center, where I learned about marketing strategies and worked on real-world projects to gain practical experience in the field of marketing.',
    type: 'achievement',
  },
];

const certificateTypes = [
  {
    value: 'all',
    label: 'All Certificates',
    icon: Award,
  },
  {
    value: 'course',
    label: 'Courses & Certifications',
    icon: GraduationCap,
  },
  {
    value: 'volunteer',
    label: 'Volunteer Work',
    icon: Users,
  },
  {
    value: 'achievement',
    label: 'Achievements',
    icon: Trophy,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'course':
      return GraduationCap;
    case 'volunteer':
      return Users;
    case 'achievement':
      return Trophy;
    default:
      return Award;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'course':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'volunteer':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'achievement':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
};

export default function CertificateGalleryClient() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredCertificates =
    selectedType === 'all' ? certificates : certificates.filter(cert => cert.type === selectedType);

  const stats = {
    total: certificates.length,
    courses: certificates.filter(c => c.type === 'course').length,
    volunteer: certificates.filter(c => c.type === 'volunteer').length,
    achievements: certificates.filter(c => c.type === 'achievement').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300">
            My Certificates & Achievements
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive collection of my professional certifications, volunteer work, and
            achievements.
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              {certificates.length} Certificates
            </span>
            <span className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              Multiple Expertise Areas
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {certificateTypes.map(type => {
            const Icon = type.icon;
            const isActive = selectedType === type.value;
            return (
              <Button
                key={type.value}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type.value)}
                className={`${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-300'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {type.label}
                <Badge variant="secondary" className="ml-2 text-xs bg-white/20 text-current">
                  {type.value === 'all'
                    ? stats.total
                    : type.value === 'course'
                      ? stats.courses
                      : type.value === 'volunteer'
                        ? stats.volunteer
                        : stats.achievements}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map(certificate => {
            const TypeIcon = getTypeIcon(certificate.type);
            return (
              <Card
                key={certificate.id}
                className="overflow-hidden bg-white dark:bg-slate-800 border dark:border-slate-700"
              >
                <div className="relative">
                  {/* Certificate Image */}
                  <div className="aspect-[3/2] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 relative">
                    <Image
                      src={certificate.image || '/placeholder.svg'}
                      alt={`${certificate.title} Certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Type Badge */}
                  <Badge className={`absolute top-3 left-3 ${getTypeColor(certificate.type)}`}>
                    <TypeIcon className="w-3 h-3 mr-1" />
                    {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Certificate Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 line-clamp-2">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {certificate.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Dates */}
                  <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {certificate.issueDate}</span>
                    </div>
                    {certificate.expiryDate && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Expires: {certificate.expiryDate}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
