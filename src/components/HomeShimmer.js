// import React from "react"
// import ContentLoader from "react-content-loader"

// const HomeShimmer = (props) => (
//   <ContentLoader 
//     speed={6}
//     width={400}
//     height={460}
//     viewBox="0 0 400 460"
//     backgroundColor="#f5f5f5"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     <circle cx="31" cy="31" r="15" /> 
//     <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
//     <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
//     <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
//   </ContentLoader>
// )

// export default HomeShimmer


const HomeShimmer = () =>{
  return (
      <div className="flex flex-wrap justify-center">
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-300"></div>
          {/* <div className="m-4 p-4 w-[15rem] h-64 rounded-lg bg-gray-100"></div> */}
      </div>
  )
}

export default HomeShimmer;