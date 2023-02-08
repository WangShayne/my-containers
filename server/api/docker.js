import Docker from "dockerode";
const docker = new Docker({ socketPath: "//./pipe/docker_engine" });
console.log("Docker", docker);
export default defineEventHandler((event) => {
  return docker.listContainers();
});
