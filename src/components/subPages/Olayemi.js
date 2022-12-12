import React, { useEffect } from "react";
import styled from "styled-components";
import MgtTeamProps from "./MgtTeamProps";
import olayemi from "../../images/Olayemi.png";

const Olayemi = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  var desc = (
    <div>
      Olayemi Odufeso is the Group Head, Corporate Services & Planning for
      ChamsAccess Limited. She has over 18 years’ experience in Transaction
      Management, Leadership, People Management, Strategy, Finance Management,
      Performance Management, Administration & Corporate Planning. <br />
      <br />A Fellow Member of the Institute of Management Consultants (IMC
      Nigeria), Certified Professional in Enterprise Management, Associate
      Member in the Chartered Institute of Personnel Management of Nigeria
      (CIPM), Emotional Intelligence Certified Performer (EICP) & Member Global
      Corporate Finance Society. <br />
      <br />
      She holds a Bachelor of Science Degree in Statistics from University of
      Ilorin. Post Graduate Diploma in Leadership from Redeemers’ International
      Leadership Academy and awarded Honorary Doctorate Degree in Executive
      Leadership and Management from Geofidel Institute for Leadership &
      Management UK & Stratford University USA. <br />
      <br />
      She has attended various trainings in top institutions & training Schools
      like Lagos Business School, Business School of Netherlands, Geofidel
      Executive Education, Corporate Finance Institute & Proten International to
      mention a few. <br />
      <br />
      She is passionate in giving back to the society by her involvement in some
      charity works which include the Prison Welfare Initiative & feeding the
      homeless.
    </div>
  );
  return (
    <DumebiContainer>
      <MgtTeamProps
        mgtName="Olayemi Odufeso"
        mgtPosition="Group Head, Corporate Services & Planning"
        mgtPhoto={olayemi}
        mgtDescName="Olayemi Odufeso"
        mgtDescPosition="Group Head, Corporate Services & Planning"
        mgtDesc={desc}
      />
      {/* <MgtTeamProps /> */}
    </DumebiContainer>
  );
};

export default Olayemi;

const DumebiContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const DumebiContainer = styled.div``;
// const DumebiContainer = styled.div``;
