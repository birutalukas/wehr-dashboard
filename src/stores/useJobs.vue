<script lang="ts">
import { reactive } from "vue";

interface Job {
    id: number;
    title: string;
    description: string;
    count: number;
    descriptionCount: number;
    hexPrimary?: string;
    hexSecondary?: string;
}

interface MyJobs extends Array<Job> {
    jobs?: Array<Object>;
}

const jobs: MyJobs = [
    {
        id: 1,
        title: "Available Position",
        description: "Urgently needed",
        count: 24,
        descriptionCount: 4,
        hexPrimary: "#FF5151",
        hexSecondary: "#FFEFE7",
    },
    {
        id: 2,
        title: "Job Open",
        description: "Active hiring",
        count: 10,
        descriptionCount: 4,
        hexPrimary: "#3786F1",
        hexSecondary: "#E8F0FB",
    },
    {
        id: 3,
        title: "New Employees",
        description: "Department",
        count: 24,
        descriptionCount: 4,
        hexPrimary: "#EE61CF",
        hexSecondary: "#FDEBF9",
    },
];
export const useJobs = reactive({
    jobs,
});

export default jobs;
</script>
