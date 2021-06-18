import { Avatar} from 'antd';
import photo from '../../download.jpg'

const About = () =>{
    return(
    <div id="about" className="block aboutBlock bgGray" style={{marginTop:'10px'}}>
      <div className="container-fluid">
        <div className="titleHolder">
            <Avatar
                size={{ xs: 80, sm: 80, md: 100, lg: 150, xl: 180, xxl: 200 }}
                src={photo}
            />
          <h2>About Me</h2>
        </div>
        <div className="contentHolder">
          <p>Hallo, Perkenalkan nama saya Irfan Hendianto Wijaya. Saya merupakan lulusan Universitas Bina Nusantara tahun 2020, dan saya mengambil jurusan Teknik Informatikan dan dengan peminatan Software Engineer. Dan juga memiliki pengalaman magang selama kurang lebih 1 tahun sebagai Full Stack Developer. Untuk sekarang saya sedang bekerja sebagai Robotic Process Automation Uipath di PT Bank Mandiri. Saya berharap dapat mengembangkan diri saya menjadi lebih baik.</p>
        </div>
      </div>
    </div>
    );
}

export default About;