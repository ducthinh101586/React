export const getUserApi = () =>
  Promise.resolve({
    name: 'Ducthinh',
    age: 24
  })

// export const getUserApi = () =>
//   Promise.reject({
//     message: 'Lỗi server',
//     data: {
//       code: 500
//     }
//   })
