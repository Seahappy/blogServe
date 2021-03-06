/*
 * @Descripttion: 
 * @Author: Cxy
 * @Date: 2022-06-05 16:52:42
 * @LastEditors: Cxy
 * @LastEditTime: 2022-06-07 12:12:52
 * @FilePath: \ehomes-admind:\gitHubBlog\blogServe\socket\live.js
 */

module.exports = live = socket => {
  socket.on('join_Room', (data, callback) => {
    socket.join(data.room)
    const send_Data = { ...data, time: new Date().getTime() }
    callback(send_Data)
    socket.to(data.room).emit('receive_Msg', send_Data)
  })
  socket.on('send_Msg', (data, callback) => {
    const send_Data = { ...data, time: new Date().getTime() }
    callback(send_Data)
    socket.to(data.room).emit('receive_Msg', send_Data)
  })
  socket.on('leave_Room', (data) => {
    socket.leave(data.room)
    const send_Data = { ...data, time: new Date().getTime() }
    socket.to(data.room).emit('receive_Msg', send_Data)
  })
}