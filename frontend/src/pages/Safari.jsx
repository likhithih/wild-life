import React from 'react'
import { Card } from '../components/Cards'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function Safari() {
  const cardData = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      image: 'https://via.placeholder.com/150',
      description: 'Passionate about building scalable web applications.',
      socialLinks: [
        { url: 'https://twitter.com/johndoe', icon: <FaTwitter /> },
        { url: 'https://github.com/johndoe', icon: <FaGithub /> },
        { url: 'https://linkedin.com/in/johndoe', icon: <FaLinkedin /> }
      ]
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      image: 'https://via.placeholder.com/150',
      description: 'Creative designer with a love for user experience.',
      socialLinks: [
        { url: 'https://twitter.com/janesmith', icon: <FaTwitter /> },
        { url: 'https://github.com/janesmith', icon: <FaGithub /> },
        { url: 'https://linkedin.com/in/janesmith', icon: <FaLinkedin /> }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Safari Page</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            role={card.role}
            image={card.image}
            description={card.description}
            socialLinks={card.socialLinks}
          />
        ))}
      </div>
    </div>
  )
}

export default Safari
