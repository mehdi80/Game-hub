import bullsEye from '../assets/bulls-eye.svg';
import thumbUp from '../assets/thumb-up.svg';
import meh from '../assets/meh.svg';
import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
    rating:number;
}


const Emoji = ({rating}:Props) => {
    if(rating < 3) return null;

    const emojiMap:{[key: number]:ImageProps} = {
        3:{ src: meh, alt: 'meh',boxSize:'25px'},
        4:{ src: thumbUp, alt: 'recommended',boxSize:'25px'},
        5:{ src: bullsEye, alt: 'exceptional',boxSize:'25px'},
    }

    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
    );
};

export default Emoji;
