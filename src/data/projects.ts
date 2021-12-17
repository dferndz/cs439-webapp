type Project = {
  id: string;
  name: string;
  description?: string;
  info_site_name?: string;
  active?: boolean;
};

const projects: Project[] = [
  {
    id: "1",
    name: "P1",
    description: "Initial project",
    info_site_name: "cs439_f21_p1",
  },
  {
    id: "2",
    name: "P2",
    info_site_name: "cs439_f21_p2",
    description: "Cooperative multithreading",
  },
  {
    id: "3",
    name: "P3",
    info_site_name: "cs439_f21_p3",
    description: "Premptive multithreading",
  },
  {
    id: "4",
    name: "P4",
    info_site_name: "cs439_f21_p4",
    description: "Synchronization primitives",
  },
  {
    id: "5",
    name: "P5",
    info_site_name: "cs439_f21_p5",
    description: "File systems",
  },
  {
    id: "6",
    name: "P6",
    info_site_name: "cs439_f21_p6",
    description: "Cache",
  },
  {
    id: "7",
    name: "P7",
    info_site_name: "cs439_f21_p7",
    description: "Virtual memory",
  },
  {
    id: "8",
    name: "P8",
    info_site_name: "cs439_f21_p8",
    description: "System calls",
  },
  {
    id: "9",
    name: "P9",
    info_site_name: "cs439_f21_p9",
    description: "Fork and exec",
    active: true,
  },
  {
    id: "10",
    name: "PA",
    info_site_name: "cs439_f21_pa",
    description: "Final project",
  },
  {
    id: "11",
    name: "PB",
    info_site_name: "cs439_f21_pb",
    description: "Final project",
  },
];

export default projects;
export { projects };
export type { Project };
