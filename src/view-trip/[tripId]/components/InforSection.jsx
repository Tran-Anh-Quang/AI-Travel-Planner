import React from 'react'

function InforSection({trip}) {
  return (
    <div>
      <img src='https://files.oaiusercontent.com/file-UmHBrVr9aauaP29aKwuSyx?se=2024-11-25T07%3A21%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D05056659-3e2f-4aa5-9b25-35388ea99a57.webp&sig=kJUtltw6IN5mEe4PJoxQKBr/Y6AnUmsIvY7Rv6unm70%3D' alt="" className='w-full h-[340px] object-cover rounded-xl'/>
      <div>
        <h2>{trip?.userSelection?.location?.label}</h2>
      </div>
    </div>
  )
}

export default InforSection
