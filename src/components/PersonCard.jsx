import React, {useState} from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState (age);
    const onClick = () => {
        setCurrentAge (currentAge + 1)
    };

    return (
        <div>
            <h2>
                {lastName}, {firstName}
            </h2>

            <p>
                Age: {currentAge}
            </p>

            <p>
                Hair Color: {hairColor}
            </p>

            <button onClick = { onClick }> Birthday Button for {firstName} {lastName} </button>

        </div>
    );
}

export default PersonCard;