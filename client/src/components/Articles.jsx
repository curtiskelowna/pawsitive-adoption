import "../styles/Articles.scss"

function Articles() {

  return (
    <div className="article-body">
      <div className="dog-article">
        <h1>Dogs</h1>
        <article>Article 1: Adopting Dogs
          Title: "The Benefits of Adopting a Dog: Why Rescue Dogs Make Great Pets"
          Summary: This article discusses the advantages of adopting a dog from a shelter or rescue organization. It highlights the positive impact of adopting a dog on both the owner and the animal. The article may cover topics such as the bond formed with rescue dogs, the joy of providing a forever home, and tips for adopting a dog.</article>
      </div>
      <div className="cat-article">
        <h1>Cats</h1>
        <article>
          Article 2: Adopting Cats
          Title: "Cat Adoption Guide: Finding Your Perfect Feline Friend"
          Summary: This article serves as a comprehensive guide to adopting a cat. It can include information on choosing the right cat breed for your lifestyle, preparing your home for a new feline family member, and the rewards of adopting a cat from a shelter or rescue. Additionally, it may discuss how to care for and bond with your newly adopted cat.
        </article>
      </div>
    </div>
  );
}

export default Articles;