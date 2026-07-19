'use client';

import ResourceCard from './ResourceCard';

interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  phone?: string;
  website?: string;
  image?: string;
}

interface ResourceGridProps {
  resources: Resource[];
  title?: string;
}

export default function ResourceGrid({ resources, title }: ResourceGridProps) {
  return (
    <section className="py-16 md:py-24 bg-fresno-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-fresno-dark mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-fresno-secondary mx-auto"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              name={resource.name}
              description={resource.description}
              category={resource.category}
              phone={resource.phone}
              website={resource.website}
              image={resource.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}