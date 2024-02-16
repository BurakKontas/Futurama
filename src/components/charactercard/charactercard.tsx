import React from "react";
import { CharacterCardProps } from "./charactercard.types";
import styles from "./charactercard.module.scss";
import { useNavigate } from "react-router-dom";

function CharacterCard({ character, className }: CharacterCardProps) {
    const navigate = useNavigate();
    if(!character) return (<div>Loading...</div>)
    return (
        <div className={`${styles.character_card} ${className}`}
            onClick={() => navigate(`/character/${character.id}`)}
        >
            <img src={character.images.main} alt={character.name.first} />
            <div className={styles.character_details}>
                <p>
                    <strong>Name:</strong> {character.name.first} {character.name.middle}{" "}
                    {character.name.last}
                </p>
                <p>
                    <strong>Age:</strong> {character.age}
                </p>
                <p>
                    <strong>Species:</strong> {character.species}
                </p>
                <p>
                    <strong>Home Planet:</strong> {character.homePlanet}
                </p>
            </div>
        </div>
    );
}

export default CharacterCard;
