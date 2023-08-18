 import { useParams } from "react-router-dom";

 
 
 export default function SinglePlayer ({ puppies }) {
    const { puppyId } = useParams();
    const matchedPuppy = puppies.find((puppy) => {
      return puppy.id == puppyId;
    });

    return (
      <h1>
        {matchedPuppy.name}: {puppyId}
      </h1>
    );
  }



