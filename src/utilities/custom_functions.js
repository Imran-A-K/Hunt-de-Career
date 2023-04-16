const homeDataLoader = async ()=>{
    const LoadedJobCategory = await fetch(`/Job_Category.json`);
    const JobCategoryData = await LoadedJobCategory.json();

    const LoadedFeaturedJobs = await fetch(`/Featured_Jobs.json`);
    const FeaturedJobsData = await LoadedFeaturedJobs.json();

    return [JobCategoryData, FeaturedJobsData]
}



export { homeDataLoader
}