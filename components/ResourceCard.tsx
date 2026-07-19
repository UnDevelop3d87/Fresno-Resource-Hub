'use client';

interface ResourceCardProps {
  name: string;
  description: string;
  category: string;
  phone?: string;
  website?: string;
  image?: string;
}

export default function ResourceCard({
  name,
  description,
  category,
  phone,
  website,
  image,
}: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      {image && (
        <div className="w-full h-48 bg-gradient-to-br from-fresno-primary to-fresno-secondary flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="inline-block bg-fresno-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
          {category}
        </div>
        
        <h3 className="text-2xl font-bold text-fresno-dark mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-3 border-t pt-4">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex items-center text-fresno-primary hover:text-fresno-secondary transition font-semibold"
            >
              <span className="mr-2">📞</span>
              {phone}
            </a>
          )}
          
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-fresno-primary hover:text-fresno-secondary transition font-semibold"
            >
              <span className="mr-2">🌐</span>
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
