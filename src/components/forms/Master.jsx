/*
This file is only the storage of the 4 forms data. It is not a form itself. [MASTER FILE]
*/
import { supabase } from "../../App";
import { v4 as uuidv4 } from "uuid";

export default async function uploadToSupabase() {
  const { data, error } = await supabase
    .from("funds_all")

    .insert({
      id: 1,
      Waterfall: localStorage.getItem("waterfall"),
      Others: localStorage.getItem("others"),
      Management: localStorage.getItem("management"),
      Identity: localStorage.getItem("identity"),
    })
    .select();

  console.log(data, error);

  const { report_data, report_error } = await supabase
  .storage
  .createBucket('1-reports', {
    public: true,
    allowedMimeTypes: ['file/xlsx'],
    fileSizeLimit: 1024
  })
}

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
