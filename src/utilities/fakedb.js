import { toast } from "react-hot-toast";

// use local storage to manage cart data
const addToDb = newAppliedJob => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const appliedStatus = appliedJobs.find( job => job.id === newAppliedJob.id)
    if (appliedStatus) {
        toast.error("You already applied for the job")
        
    }
    else {
        
        appliedJobs= [...appliedJobs,newAppliedJob]
    }
    localStorage.setItem('job-application', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('job-application', JSON.stringify(appliedJobs));
    }
}

const getAppliedJobs = () => {
    let appliedJobs = [];

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('job-application');
    if (storedData) {
        appliedJobs = JSON.parse(storedData);
    }
    return appliedJobs;
}

const deleteJobApplicationData = () => {
    localStorage.removeItem('job-application');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteJobApplicationData 
}