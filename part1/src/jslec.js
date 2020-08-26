// const x = 1;
// let y = 5;
// console.log(x + y);

// const t = [1, -1, 3];

// t.push(5);

// console.log(t.length);

// console.log(t[1]);

// t.forEach(value => {
//     console.log(value)
// });

const t = [1,-1, 0];
// concat does not change the old array but creates a new one
const t2 = t.concat(5);

// console.log(t);
//console.log(t2);

const m1 = t.map(value => value * 2 );
//console.log(m1);

const m2 = t.map(value => '<li>' + value + '</li>')
//console.log(m2)

const t4 = [1,2,3,4,5];

const [first, second, ...rest] = t4;

console.log(first,second);
console.log(rest);

const object1 = {
    name: 'EddBoi',
    age: 27,
    education: 'its a cert',
}

const object2 = {
    name: 'Full stack web app development',
    level: 'Not sure , intermediate',
    size: 5,
}

const object3 = {
    name: {
        first: 'dan',
        last: 'le',
    },
    grades: [1,2,3,1],
    department: 'Stanford'
}

console.log(object3.grades)
console.log(object3.department.toUpperCase())

const fieldName = 'age' 
console.log(object1[fieldName]) 

object1.address = 'Helsinki'
object1['secret number'] = 12341