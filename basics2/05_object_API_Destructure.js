// ++++++++++++ Object De-Structure & API ++++++++++++//

const course = {
    coursename: "computer",
    price: 999,
    courseInstructor: "Imran"
}

// course.courseInstructor            // many times when access the object we call in this form and call againn and again . not good approach when acess object many times

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

const navbar = (prop.company) =>{              // in this react code sometimes we access value with props
const navbar = ({company}) => {}              // in this we not need to use props . again again,only use destructure and access the value direct

}
navbar( company="imran" )

// +++++++++++ API +++++++++++ //

// the value come from backend and how we write is simply API works

// earlier time value come in XML forms but this is complex . But now value come from in JSON form.

// JSON format         // JSON is javascript object notation

{
    "name": "imran",
    "course": "coumputer",
    "price": "free"
}

// API comes in Object forms but not anytime, sometimes comes in Array form

[
    {},
    {},                        // randomuser me api  >googe browse //
    {}
]


