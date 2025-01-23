/*
This file is only the storage of the 4 forms data. It is not a form itself. [MASTER FILE]
*/
import { supabase } from "../../App";
import { v4 as uuidv4 } from 'uuid';

export default async function uploadToSupabase() {

  const { data, error } = await supabase
  .from('funds_all')
  /*
  .insert({ id: 1, 
    name: others.fundName, 
    status: others.fundStatus,
    currency: others.currency,
    legal_form: others.legalForm,
    incorporation: others.dateIncorporation,
    vintage: others.vintageYears,
    type: others.fundType,
    region: others.region,
    strategy: others.strategy,
    geography: others.geographyFocus,
    sector: others.sectorFocus,
    number: others.number,
    mgmt_fee: others.managementFee,
    information: others.fundInformation,
    fee_outside: others.feeOutsideCommitment,
    call_frequency: others.feeCallFrequency,
    fee_policy: others.feePolicy,
    hurdle: others.hurdleRate,
    second_hurdle: others.secondHurdleRate,
    hurdle_desc: others.hurdleDescription,
    carried_interest: others.carriedInterest ,
    second_carried: others.secondCarriedInterest ,
    carried_desc: others.carriedInterestDescription ,
    clawback: others.clawback ,
    house: others.nameFund ,
    address: others.registeredAddress ,
    city: others.city ,
    state: others.state ,
    country: others.country ,
    zip: others.zipCode ,
    desc: others.description ,
   })
  */
  .insert({
    id: 1,
    Waterfall: localStorage.getItem("waterfall"),
    Others: localStorage.getItem("others"),
    Management: localStorage.getItem("management"),
    Identity: localStorage.getItem("identity")
  })
  .select()

  console.log(data, error)
}

// export function Master() {
//   const [waterfall, setWaterfall] = useState(null);
//   const [others, setOthers] = useState(null);
//   const [management, setManagement] = useState(null);
//   const [identity, setIdentity] = useState(null);

//   useEffect(() => {
//     const savedWaterfall = localStorage.getItem("waterfall");
//     const savedOthers = localStorage.getItem("others");
//     const savedManagement = localStorage.getItem("management");
//     const savedIdentity = localStorage.getItem("identity");

//     if (savedWaterfall) setWaterfall(JSON.parse(savedWaterfall));
//     if (savedOthers) setOthers(JSON.parse(savedOthers));
//     if (savedManagement) setManagement(JSON.parse(savedManagement));
//     if (savedIdentity) setIdentity(JSON.parse(savedIdentity));


//   }, []);

//   console.log(waterfall)
//   // waterfall, others, management, identity

//   return (
//     <div>
//       <h1>Master Data</h1>

//       <section>
//         <h2>Waterfall</h2>
//         {waterfall ? (
//           <pre>{JSON.stringify(waterfall, null, 2)}</pre>
//         ) : (
//           <p>No Waterfall data found.</p>
//         )}
//       </section>

//       <section>
//         <h2>Others</h2>
//         {others ? (
//           <pre>{JSON.stringify(others, null, 2)}</pre>
//         ) : (
//           <p>No Others data found.</p>
//         )}
//       </section>

//       <section>
//         <h2>Management</h2>
//         {management ? (
//           <pre>{JSON.stringify(management, null, 2)}</pre>
//         ) : (
//           <p>No Management data found.</p>
//         )}
//       </section>

//       <section>
//         <h2>Identity</h2>
//         {identity ? (
//           <pre>{JSON.stringify(identity, null, 2)}</pre>
//         ) : (
//           <p>No Identity data found.</p>
//         )}
//       </section>
//     </div>
//   );
// }
