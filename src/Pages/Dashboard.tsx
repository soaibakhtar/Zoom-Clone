import React from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from '@elastic/eui'
import dashboard1 from "../assets/dashboard1.png"
import dashboard2 from "../assets/dashboard2.png"
import dashboard3 from "../assets/dashboard3.png"
import Header from '../components/Header'
function Dashboard() {
  useAuth()
  const navigate = useNavigate();

  return (
      <>
        <div
          style={{
            display: "flex",
            height : "100vh",
            flexDirection : "column"
          }}
        >
          <Header/>
          <EuiFlexGroup
            justifyContent='center'
            alignItems='center'
            style={{margin : "5vh 10vw"}}
          >
             <EuiFlexItem>
                <EuiCard
                  icon={<EuiImage size="5rem" src={dashboard1} alt='icon' />}
                  title={`Create Meeting`}
                  description="Create a new meeting and invite people."
                  onClick={() => navigate("/createmeeting")}
                  paddingSize='xl'
                />
             </EuiFlexItem>

             <EuiFlexItem>
                <EuiCard
                  icon={<EuiImage size="100%" src={dashboard2} alt='icon' />}
                  title={`My Meetings`}
                  description="View your created meetings."
                  onClick={() => navigate("/mymeetings")}
                  paddingSize='xl'
                />
             </EuiFlexItem>

             <EuiFlexItem>
                <EuiCard
                  icon={<EuiImage size="5rem" src={dashboard3} alt='icon' />}
                  title={`Meetings`}
                  description="View the meetings that you are invited to."
                  onClick={() => navigate("/meetings")}
                  paddingSize='xl'
                />
             </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </>
    )
}

export default Dashboard