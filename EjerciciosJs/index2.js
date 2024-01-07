const koders = [
    {
      id: 1,
      first_name: "Laurella",
      last_name: "Tupper",
      age: 42,
      email: "ltupper0@123-reg.co.uk",
      generation: 2,
    },
    {
      id: 2,
      first_name: "Daron",
      last_name: "Cockle",
      age: 18,
      email: "dcockle1@salon.com",
      generation: 12,
    },
    {
      id: 3,
      first_name: "Marleen",
      last_name: "Eller",
      age: 18,
      email: "meller2@bloglovin.com",
      generation: 11,
    },
    {
      id: 4,
      first_name: "Worthington",
      last_name: "Vlach",
      age: 16,
      email: "wvlach3@taobao.com",
      generation: 22,
    },
    {
      id: 5,
      first_name: "Wendell",
      last_name: "Artiss",
      age: 17,
      email: "wartiss4@microsoft.com",
      generation: 12,
    },
    {
      id: 6,
      first_name: "Kin",
      last_name: "Pala",
      age: 55,
      email: "kpala5@photobucket.com",
      generation: 6,
    },
    {
      id: 7,
      first_name: "Lucio",
      last_name: "Bagshawe",
      age: 56,
      email: "lbagshawe6@behance.net",
      generation: 15,
    },
    {
      id: 8,
      first_name: "Reggy",
      last_name: "Bullingham",
      age: 30,
      email: "rbullingham7@fda.gov",
      generation: 2,
    },
    {
      id: 9,
      first_name: "Clarinda",
      last_name: "Steaning",
      age: 52,
      email: "csteaning8@liveinternet.ru",
      generation: 22,
    },
    {
      id: 10,
      first_name: "Karolina",
      last_name: "Leblanc",
      age: 59,
      email: "kleblanc9@tiny.cc",
      generation: 6,
    },
    {
      id: 11,
      first_name: "Colet",
      last_name: "McCuffie",
      age: 60,
      email: "cmccuffiea@dyndns.org",
      generation: 24,
    },
    {
      id: 12,
      first_name: "Kimble",
      last_name: "Dovermann",
      age: 54,
      email: "kdovermannb@gmail.com",
      generation: 3,
    },
    {
      id: 13,
      first_name: "Janessa",
      last_name: "Illing",
      age: 19,
      email: "jillingc@hubpages.com",
      generation: 6,
    },
    {
      id: 14,
      first_name: "Lani",
      last_name: "Ricardo",
      age: 44,
      email: "lricardod@opensource.org",
      generation: 6,
    },
    {
      id: 15,
      first_name: "Caye",
      last_name: "Cowmeadow",
      age: 16,
      email: "ccowmeadowe@narod.ru",
      generation: 11,
    },
    {
      id: 16,
      first_name: "Nataline",
      last_name: "MacInnes",
      age: 28,
      email: "nmacinnesf@gmail.com",
      generation: 13,
    },
    {
      id: 17,
      first_name: "Dayna",
      last_name: "Nimmo",
      age: 17,
      email: "dnimmog@infoseek.co.jp",
      generation: 12,
    },
    {
      id: 18,
      first_name: "Sheff",
      last_name: "Normanville",
      age: 23,
      email: "snormanvilleh@cisco.com",
      generation: 13,
    },
    {
      id: 19,
      first_name: "Olivie",
      last_name: "Bladesmith",
      age: 27,
      email: "obladesmithi@newyorker.com",
      generation: 6,
    },
    {
      id: 20,
      first_name: "Ida",
      last_name: "Jewess",
      age: 50,
      email: "ijewessj@ca.gov",
      generation: 9,
    },
  ];
  
  // reduce
  // Quiero enviar un correo a cada koder
    // koders.reduce((accum, current) => {
    //     console.log(`Correo enviado a: ${current.email}`);
    // });

  // reduce
  // Necesito Obtener el nombre completo de cada alumno en una sola cadena
    // let fullNameWithReduce = koders.reduce((accum, current) => {
    //     return [...accum, `${current.first_name} ${current.last_name}`];
    // }, []);
    // console.log(fullNameWithReduce);
  
  // reduce
  // quiero saber cuantos koders son menores de edad

// let kidsWithReduce = koders.reduce((accum, current) => {
//    if(current.age < 18) {
//     accum++
//    }
//    return accum;
// },0);
// console.log(`Existen ${kidsWithReduce} koders menores de 18`);

  // reduce
  // Quiero encontrar al koder con id 15
    // let kodersById15WithReduce = koders.reduce((accum, current) => {
    //     if(current.id === 15) {
    //         accum = current;
    //     }
    //     return accum;
    // }, {});
    // console.log(kodersById15WithReduce);
  
  // reduce
  // Quiero saber si algunos de los koders tienen correo con gmail

// let emailContainsGmailwithReduce = koders.reduce((accum, current) => {
//     if(current.email.includes("gmail")) {
//         accum.push(current);
//     }
//     return accum;
// });
//   console.log(emailContainsGmailwithReduce);
  
  // reduce
  // Quiero saber si todos los koders son mayores de edad

let kodersMayoresDeEdadConReduce = koders.reduce((accum, current) => current.age >= 18)
  console.log(kodersMayoresDeEdadConReduce && "Al menos un koder es menor de edad");
  
  // reduce
  // Quiero saber la cuenta de koders por generación

//   let kodersPerGeneration = koders.reduce((accum, current) => {
//     let {generation} = current;
//         if(accum[`g${generation}`]) {
//             accum[`g${generation}`]+= 1;
//         } else {
//             accum[`g${generation}`] = 1;
//         }
//     return accum;
//   }, {});
//   console.log("koders por generacion");
//   console.log(kodersPerGeneration);
