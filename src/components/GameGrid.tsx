import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import {GameQuery} from "../App";


interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
    const {data, error, loading} = useGames(gameQuery);
    const skeleton = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                        spacing={3}
                        padding='10px'>
                {loading && skeleton.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)}
                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>)}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
