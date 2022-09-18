import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer S_bQajPKezSKY2EGPVc-h4_qCqte-qxhlzmI9MxTUdyXyTlRl6l0_tbePulg4MME3i4W-vzpWXxhst1UwdEcPiIt_nBFndpkCU5P_4r_tnLzd3xjvWQPbKJt9RMiY3Yx'
        
    }

});

