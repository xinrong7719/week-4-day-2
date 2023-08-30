import React, { useState } from 'react';
import _ from 'lodash';

const ExamplesComponent = () => {
    // Example 1: Create an array of objects and update its second index
    const [arrayOfObjects, setArrayOfObjects] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ]);

    const updateSecondIndex = () => {
        const updatedArray = [...arrayOfObjects];
        updatedArray[1] = { id: 2, name: 'Updated Bob' };
        setArrayOfObjects(updatedArray);
    };

    // Example 2: Create an object, update its 2 property values
    const [person, setPerson] = useState({
        name: 'John',
        age: 30,
        occupation: 'Developer',
    });

    const updateProperties = () => {
        setPerson(prevPerson => ({
            ...prevPerson,
            age: 31,
            occupation: 'Senior Developer',
        }));
    };

    // Example 3: Practice all datatypes for state variables
    const [stringState, setStringState] = useState('Hello, world!');
    const [numberState, setNumberState] = useState(42);
    const [booleanState, setBooleanState] = useState(true);
    const [arrayState, setArrayState] = useState([1, 2, 3]);
    const [objectState, setObjectState] = useState({ name: 'John', age: 30 });

    // Task 2a: Symmetric Difference
    const [arrOne, setArrOne] = useState([
        { id: 20, name: 'alex' },
        { id: 30, name: 'alina' }
    ]);

    const [arrTwo, setArrTwo] = useState([
        { id: 40, name: 'hello' },
        { id: 30, name: 'world' }
    ]);

    const updateArrays = () => {
        setArrOne([
            { id: 20, name: 'updated alex' },
            { id: 30, name: 'alina' }
        ]);

        setArrTwo([
            { id: 40, name: 'hello' },
            { id: 30, name: 'updated world' }
        ]);
    };

    // Task 2b: Get all tables
    const str = ['u', 'ec'];
    const arr = [
        { storageVal: 'u', table: ['E', 'F'] },
        { storageVal: 'data', table: ['E', 'F'] },
        { storageVal: 'ec', table: ['E'] }
    ];

    const allTables = _.flatMap(arr, 'table');

    // Task 2c: Flatten an array
    const a = [['E'], ['F']];
    const flattenedArray = _.flatten(a);

    // Task 2d: Combine arrays while maintaining order
    const t = ['E', 'F'];
    const arraysToCombine = [['F'], ['G']];
    const combinedArray = _.union(_.concat(t, ...arraysToCombine));

    return (
        <div>
            <h2>Array Example</h2>
            <button onClick={updateSecondIndex}>Update Second Index</button>
            <pre>{JSON.stringify(arrayOfObjects, null, 2)}</pre>
            
            <h2>Object Example</h2>
            <button onClick={updateProperties}>Update Properties</button>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            
            <h2>Datatypes Example</h2>
            <pre>{stringState}</pre>
            <pre>{numberState}</pre>
            <pre>{booleanState.toString()}</pre>
            <pre>{JSON.stringify(arrayState)}</pre>
            <pre>{JSON.stringify(objectState, null, 2)}</pre>
            
            <h2>Task 2a: Symmetric Difference</h2>
            <button onClick={updateArrays}>Update Arrays</button>
            <pre>{JSON.stringify(arrOne.concat(arrTwo), null, 2)}</pre>
            
            <h2>Task 2b: Get All Tables</h2>
            <pre>{JSON.stringify(allTables, null, 2)}</pre>
            
            <h2>Task 2c: Flatten an Array</h2>
            <pre>{JSON.stringify(flattenedArray, null, 2)}</pre>
            
            <h2>Task 2d: Combine Arrays while Maintaining Order</h2>
            <pre>{JSON.stringify(combinedArray, null, 2)}</pre>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <ExamplesComponent />
        </div>
    );
};

export default App;
