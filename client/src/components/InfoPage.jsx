import React from 'react';

function InfoPage({ infoType }) {
  let content = null;

  switch (infoType) {
    case 'about':
      content = (
        <div>
          <h1>About Us</h1>
          <p>
            Welcome to the heart and soul of our pet-loving community! At Pawsitive Adoptions, we're passionate about connecting you with your future furry family members and providing a loving home for every pet in need.
          </p>
          <p>
            We've partnered with the PetFinder API to give you access to a vast network of adoptable pets from shelters and rescues across the country. Our platform makes it easy for you to search, find, and connect with your future pet soulmate. Whether you're looking for a loyal dog, or a playful cat, we've got you covered.
          </p>
          <p>
            Thank you for choosing Pawsitive Adoptions as your trusted companion on your pet adoption journey. Together, we'll make a positive impact on the lives of pets and the people who love them.
          </p>
        </div>
      );
      break;
    case 'contact':
      content = <div>
        <h1>Contact Us</h1>
        <p>
          If you have a question about a specific pet or policies at a shelter, please contact them directly. Asking Petfinder will delay your search for a pet, since each shelter manages its own pet list and information on Pawsitive Adoptions.
        </p>
      </div>;
      break;
    case 'faq':
      content = <div>
        <h1>FAQ</h1>
        <h2>How do I adopt a pet?</h2>
        <p>
          If you're interested in adopting a pet, please contact the shelter or rescue group directly. Pawsitive Adoptions only provides information about specific pets and shelters.
        </p>
        <h2>How do I surrender a pet?</h2>
        <p>
          If you need to surrender a pet, please contact the nearest shelter or rescue group directly. Pawsitive Adoptions only provides information about specific pets and shelters.
        </p>
        <h2>How do I know if I should adopt a dog or a cat?</h2>
        <p>
          The best way to decide if you should adopt a dog or a cat is to consider your lifestyle and preferences. For example, if you're an active person who enjoys the outdoors, a dog might be a better fit for you. If you're more of a homebody, a cat might be a better fit. If you have children, you should also consider their needs and preferences when deciding whether to adopt a dog or a cat.
        </p>
      </div>;
      break;
    default:
      content = <div>Select an option from the footer.</div>;
  }

  return <div className="info-page">{content}</div>;
}

export default InfoPage;
