import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, error, loading} = useGenres()

    if (error) return null;

    if (loading) return <Spinner/>;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}/>
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontSize='lg'
                                variant='link'
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    );
};

export default GenreList;
