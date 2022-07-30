var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  code: 200,
  data: [
    {
      src: "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100003823115/FocusFullshop/CkJqZnMvdDEvODY4MDgvNS8yNzEzNC8yODUzMDgvNjJkOWE1YzBFNzJhYTkzMWEvNTE0Nzg4NWU4OWQzODY4Yy5wbmcSCTQtdHlfMF81NTACOO6LekIZChXnmb7ojYnlkbPonJzppa_mnpzlubIQAUIQCgzmu6ExOTnlh48xMzAQAkIQCgznq4vljbPmiqLotK0QBkIKCgblipvojZAQB1iL_MTF9AI/cr/s/q.jpg",
      id: "32",
    },
    {
      src: "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000367/100023357050/FocusFullshop/CkJqZnMvdDEvMjQyNTYvMzMvMTc5MzIvODk3MTEvNjJkOWE4YmFFMWI3ZjFhMjcvNzZhNzc5NzAzODZmNzM4NC5wbmcSCTEtdHlfMF81MjACOO-LekIWChLmjbfmsI_lhrLppa7osLfniakQAUINCgnotK3ov4fnmL4QAkIQCgznq4vljbPmiqLotK0QBkIKCgbkvJjpgIkQB1j6nO3O9AI/cr/s/q.jpg",
      id: "10",
    },
    {
      src: "https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000368/10041981438268/FocusFullshop/CkRqZnMvdDEvMTc4MDY5LzIxLzI3Mjc4LzEwOTE3Ny82MmNlMDZlZkVkMzAxZGNkNS8zZDVmYTI5YmE5NWEwNmE3LmpwZxIKOTk5LXR5XzBfMTABOPCLeli8kvKloaQC/cr/s/q.jpg",
      id: "8",
    },
  ],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
