import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const OSExamNotes = () => {
  const [expandedUnit, setExpandedUnit] = useState(1);

  const units = [
    {
      unit: 1,
      title: "Basic of Operating System and Its Structures",
      topics: [
        { term: "Operating System (OS)", explanation: "Software that manages computer hardware and software resources. Acts as intermediary between user and hardware." },
        { term: "Computer System Organization", explanation: "How computer components are arranged: CPU, Memory, I/O devices connected via bus." },
        { term: "Computer System Architecture", explanation: "Design structure of computer - can be single processor, multiprocessor, or clustered systems." },
        { term: "Computer System Structure", explanation: "Layered organization: Hardware → OS → Application Programs → Users." },
        { term: "Computer System Operations", explanation: "How computer works: Bootstrap program loads OS, interrupts signal events, I/O operations occur concurrently with CPU." },
        { term: "Interrupt", explanation: "Signal to CPU that some event has occurred. CPU stops current work, saves state, handles interrupt, then resumes." },
        { term: "Trap/Exception", explanation: "Software-generated interrupt caused by error or user request (like system call)." },
        { term: "Process Management", explanation: "OS manages processes: creation, scheduling, termination, synchronization, and communication." },
        { term: "Memory Management", explanation: "OS keeps track of which memory parts are used, allocates/deallocates memory, decides which processes to load." },
        { term: "Storage Management", explanation: "OS manages files, directories, disk space, and provides file system for data storage." },
        { term: "OS Services", explanation: "Functions OS provides: Program execution, I/O operations, file manipulation, communication, error detection, resource allocation, protection." },
        { term: "User Interface (UI)", explanation: "How users interact with OS. Types: CLI (Command Line Interface), GUI (Graphical), Batch." },
        { term: "System Calls", explanation: "Programming interface to OS services. User programs request OS services through system calls." },
        { term: "Types of System Calls", explanation: "5 types: Process control, File management, Device management, Information maintenance, Communications." },
        { term: "System Programs", explanation: "Utilities that provide convenient environment: File management, status info, programming support, communications." },
        { term: "OS Design Goals", explanation: "User goals: Convenient, easy to use, reliable, safe, fast. System goals: Easy to design, implement, maintain, flexible." },
        { term: "OS Structures - Simple", explanation: "MS-DOS: No clear separation, direct hardware access (not secure)." },
        { term: "OS Structures - Layered", explanation: "OS divided into layers. Each layer uses services of lower layer only. Easy debugging but slow." },
        { term: "OS Structures - Microkernel", explanation: "Minimal kernel, most services in user space. Reliable, secure but communication overhead. Example: Mach." },
        { term: "OS Structures - Modular", explanation: "Kernel has core components, other services load dynamically. Modern approach - used in Linux, Windows." },
        { term: "Monolithic Kernel", explanation: "All OS services in kernel space. Fast but large, difficult to maintain. Example: Traditional UNIX." }
      ]
    },
    {
      unit: 2,
      title: "Process and Threads",
      topics: [
        { term: "Process", explanation: "Program in execution. Has code, data, stack, heap, and current activity (PC, registers)." },
        { term: "Process States", explanation: "New (being created), Ready (waiting for CPU), Running (executing), Waiting (waiting for event), Terminated (finished)." },
        { term: "Process Control Block (PCB)", explanation: "Data structure containing process info: state, PC, registers, memory limits, open files, CPU scheduling info." },
        { term: "Process Scheduling", explanation: "Selecting which process runs next. Uses queues: Job queue, Ready queue, Device queue." },
        { term: "Scheduler Types", explanation: "Long-term (job scheduler), Short-term (CPU scheduler), Medium-term (swapping)." },
        { term: "Context Switch", explanation: "Saving state of old process and loading saved state of new process. Pure overhead - no useful work." },
        { term: "Process Creation", explanation: "Parent creates child processes. Use fork() system call. Child may be duplicate or load new program." },
        { term: "Process Termination", explanation: "Process finishes execution using exit(). Parent can terminate child using abort()." },
        { term: "Zombie Process", explanation: "Process that has completed but entry remains in process table. Parent hasn't called wait()." },
        { term: "Orphan Process", explanation: "Process whose parent terminated. Init process becomes new parent." },
        { term: "Interprocess Communication (IPC)", explanation: "Processes exchange data. Two models: Shared Memory, Message Passing." },
        { term: "Shared Memory", explanation: "Processes share memory region for communication. Fast but needs synchronization." },
        { term: "Message Passing", explanation: "Processes communicate by sending messages. Slower but easier synchronization. Uses send() and receive()." },
        { term: "Critical Section", explanation: "Code segment where shared resources are accessed. Only one process should execute at a time." },
        { term: "Critical Section Requirements", explanation: "1. Mutual Exclusion, 2. Progress (no deadlock), 3. Bounded Waiting (no starvation)." },
        { term: "Mutual Exclusion", explanation: "Only one process in critical section at a time. Others must wait." },
        { term: "Peterson's Solution", explanation: "Software solution for 2 processes using turn and flag variables. May not work on modern processors." },
        { term: "Hardware Synchronization - Test and Set", explanation: "Atomic instruction that tests and modifies a variable. Used to implement locks." },
        { term: "Hardware Synchronization - Swap", explanation: "Atomic instruction that swaps two variables. Alternative to test-and-set." },
        { term: "Mutex Lock", explanation: "Simplest synchronization tool. Has acquire() and release(). Binary - locked or unlocked." },
        { term: "Semaphore", explanation: "Integer variable accessed only via wait() and signal(). Two types: Binary (0/1), Counting (any value)." },
        { term: "Binary Semaphore", explanation: "Value 0 or 1. Similar to mutex. Also called mutex semaphore." },
        { term: "Counting Semaphore", explanation: "Value ranges over unrestricted domain. Used for controlling access to resource with multiple instances." },
        { term: "Semaphore wait()", explanation: "Also called P() or down(). Decrements semaphore. If value becomes negative, process blocks." },
        { term: "Semaphore signal()", explanation: "Also called V() or up(). Increments semaphore. If processes waiting, wakes one up." },
        { term: "Monitor", explanation: "High-level synchronization construct. Only one process active inside monitor at a time. Easier than semaphores." },
        { term: "Thread", explanation: "Lightweight process. Basic unit of CPU utilization. Shares code, data, files with other threads of same process." },
        { term: "Thread Benefits", explanation: "Responsiveness, Resource sharing, Economy (cheaper than process), Scalability (utilize multiprocessors)." },
        { term: "User Threads", explanation: "Managed by user-level thread library. Fast but kernel not aware. Examples: POSIX Pthreads, Java threads." },
        { term: "Kernel Threads", explanation: "Managed by OS kernel. Slower but kernel can schedule them. Examples: Windows, Linux threads." },
        { term: "Multithreading Models - Many-to-One", explanation: "Many user threads mapped to one kernel thread. If one blocks, all block. Example: Green threads." },
        { term: "Multithreading Models - One-to-One", explanation: "Each user thread maps to kernel thread. More concurrency but overhead. Example: Windows, Linux." },
        { term: "Multithreading Models - Many-to-Many", explanation: "Many user threads to many kernel threads. Most flexible. Example: Solaris." },
        { term: "Thread Library", explanation: "API for creating and managing threads. Examples: POSIX Pthreads, Windows threads, Java threads." },
        { term: "Thread Issues - Fork()", explanation: "Should fork() duplicate all threads or just calling thread? Depends on use case." },
        { term: "Thread Issues - Signal Handling", explanation: "Where to deliver signal? To thread it applies to, to all threads, or specific thread?" },
        { term: "Thread Cancellation", explanation: "Terminating thread before completion. Asynchronous (immediate) or Deferred (at cancellation point)." }
      ]
    },
    {
      unit: 3,
      title: "Processor Scheduling and Deadlocks",
      topics: [
        { term: "CPU Scheduling", explanation: "Selecting process from ready queue to allocate CPU. Maximizes CPU utilization." },
        { term: "CPU Burst", explanation: "Time process executes CPU instructions before I/O." },
        { term: "I/O Burst", explanation: "Time process waits for I/O operation." },
        { term: "Preemptive Scheduling", explanation: "CPU can be taken away from running process. Used in modern OS. May cause race conditions." },
        { term: "Non-Preemptive Scheduling", explanation: "Process keeps CPU until it terminates or switches to waiting. Simple but poor response time." },
        { term: "Dispatcher", explanation: "Module that gives CPU control to selected process. Should be very fast." },
        { term: "Dispatch Latency", explanation: "Time taken by dispatcher to stop one process and start another." },
        { term: "Scheduling Criteria - CPU Utilization", explanation: "Percentage of time CPU is busy. Want to maximize (40-90%)." },
        { term: "Scheduling Criteria - Throughput", explanation: "Number of processes completed per time unit. Want to maximize." },
        { term: "Scheduling Criteria - Turnaround Time", explanation: "Total time from submission to completion. Want to minimize." },
        { term: "Scheduling Criteria - Waiting Time", explanation: "Total time process spends in ready queue. Want to minimize." },
        { term: "Scheduling Criteria - Response Time", explanation: "Time from submission to first response. Want to minimize." },
        { term: "FCFS (First Come First Served)", explanation: "Process that arrives first gets CPU first. Simple but may cause convoy effect. Non-preemptive." },
        { term: "Convoy Effect", explanation: "Short processes wait for long process to release CPU. Poor average waiting time in FCFS." },
        { term: "SJF (Shortest Job First)", explanation: "Process with smallest CPU burst first. Optimal - minimum average waiting time. Can be preemptive or non-preemptive." },
        { term: "SRTF (Shortest Remaining Time First)", explanation: "Preemptive version of SJF. If new process has shorter burst than remaining time, preempt." },
        { term: "Priority Scheduling", explanation: "CPU allocated to highest priority process. Can be preemptive or non-preemptive. May cause starvation." },
        { term: "Starvation", explanation: "Low priority processes may never execute. Solved by aging." },
        { term: "Aging", explanation: "Gradually increase priority of processes that wait for long time. Prevents starvation." },
        { term: "Round Robin (RR)", explanation: "Each process gets small time quantum (10-100ms). If not finished, goes to end of queue. Preemptive FCFS." },
        { term: "Time Quantum", explanation: "Small unit of CPU time in Round Robin. If too large, becomes FCFS. If too small, too much context switching." },
        { term: "Multilevel Queue Scheduling", explanation: "Ready queue divided into separate queues based on process type. Each queue has own scheduling algorithm." },
        { term: "Multilevel Feedback Queue", explanation: "Processes can move between queues based on behavior. Most general, most complex. Used in modern OS." },
        { term: "Scheduling Algorithm Evaluation", explanation: "Methods: Deterministic modeling, Queueing models, Simulations, Implementation." },
        { term: "Deadlock", explanation: "Set of processes blocked, each holding resource and waiting for resource held by another. Circular wait." },
        { term: "Deadlock Conditions (4)", explanation: "ALL must hold: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait." },
        { term: "Mutual Exclusion (Deadlock)", explanation: "At least one resource must be non-shareable. Only one process can use at a time." },
        { term: "Hold and Wait", explanation: "Process holding at least one resource is waiting to acquire additional resources." },
        { term: "No Preemption", explanation: "Resources cannot be forcibly taken. Must be released voluntarily." },
        { term: "Circular Wait", explanation: "P0 waits for P1, P1 waits for P2, ..., Pn waits for P0. Circular chain." },
        { term: "Resource Allocation Graph (RAG)", explanation: "Directed graph showing processes and resources. Vertices: Processes, Resources. Edges: Request, Assignment." },
        { term: "Deadlock in RAG", explanation: "If graph has cycle and single instance per resource type → deadlock. Multiple instances → maybe deadlock." },
        { term: "Deadlock Prevention", explanation: "Ensure at least one of 4 conditions cannot hold. Deny Mutual Exclusion, Hold and Wait, No Preemption, or Circular Wait." },
        { term: "Deadlock Avoidance", explanation: "System knows future resource requests. Grants only if safe. Uses Banker's Algorithm." },
        { term: "Safe State", explanation: "System can allocate resources to each process in some order and avoid deadlock. Safe sequence exists." },
        { term: "Unsafe State", explanation: "No safe sequence exists. May lead to deadlock but not guaranteed." },
        { term: "Banker's Algorithm", explanation: "Deadlock avoidance algorithm. Checks if granting request leaves system in safe state. Uses Available, Max, Allocation, Need matrices." },
        { term: "Banker's Algorithm - Available", explanation: "Vector showing available instances of each resource type." },
        { term: "Banker's Algorithm - Max", explanation: "Matrix showing maximum demand of each process for each resource." },
        { term: "Banker's Algorithm - Allocation", explanation: "Matrix showing resources currently allocated to each process." },
        { term: "Banker's Algorithm - Need", explanation: "Matrix showing remaining resource need. Need = Max - Allocation." },
        { term: "Deadlock Detection", explanation: "Allow deadlock to occur, then detect and recover. Use detection algorithm periodically." },
        { term: "Wait-for Graph", explanation: "Variant of RAG for single instance resources. Only processes, no resources. Cycle means deadlock." },
        { term: "Deadlock Recovery", explanation: "Methods: 1. Process Termination (abort all or one at a time), 2. Resource Preemption (select victim, rollback, starvation)." }
      ]
    },
    {
      unit: 4,
      title: "Memory and Storage Management",
      topics: [
        { term: "Main Memory", explanation: "Primary storage where programs and data currently in use reside. Volatile - loses data on power off." },
        { term: "Address Binding", explanation: "Mapping instructions and data to memory addresses. Can be Compile time, Load time, or Execution time." },
        { term: "Logical Address", explanation: "Address generated by CPU during program execution. Also called virtual address." },
        { term: "Physical Address", explanation: "Actual address in memory unit. Loaded into memory-address register." },
        { term: "MMU (Memory Management Unit)", explanation: "Hardware that maps logical to physical addresses at runtime." },
        { term: "Swapping", explanation: "Moving entire process between main memory and disk. Helps run more processes than memory can hold." },
        { term: "Contiguous Memory Allocation", explanation: "Each process occupies single contiguous memory section. Simple but causes fragmentation." },
        { term: "Fixed Partitioning", explanation: "Memory divided into fixed-size partitions. Process placed in smallest sufficient partition. Internal fragmentation." },
        { term: "Variable Partitioning", explanation: "Partitions created dynamically based on process size. External fragmentation." },
        { term: "Internal Fragmentation", explanation: "Wasted space within allocated memory block. Allocated memory larger than requested." },
        { term: "External Fragmentation", explanation: "Free memory scattered in small blocks. Total free memory enough but not contiguous." },
        { term: "First Fit", explanation: "Allocate first hole big enough. Fast, simple." },
        { term: "Best Fit", explanation: "Allocate smallest hole big enough. Minimizes wasted space but slow, creates tiny holes." },
        { term: "Worst Fit", explanation: "Allocate largest hole. Leaves larger leftover holes but slow." },
        { term: "Compaction", explanation: "Shuffle memory contents to place all free memory together. Solves external fragmentation but expensive." },
        { term: "Segmentation", explanation: "Divide program into logical segments: code, data, stack. Each segment has name and length. Reflects user view." },
        { term: "Segment Table", explanation: "Maps segment name to base address and limit. Each entry: base (starting physical address), limit (segment length)." },
        { term: "Paging", explanation: "Divide physical memory into fixed-size frames and logical memory into same-size pages. No external fragmentation." },
        { term: "Page", explanation: "Fixed-size block of logical memory. Typical size: 4KB." },
        { term: "Frame", explanation: "Fixed-size block of physical memory. Same size as page." },
        { term: "Page Table", explanation: "Maps page number to frame number. One entry per page. Stored in main memory." },
        { term: "Page Table Entry (PTE)", explanation: "Contains frame number, valid/invalid bit, protection bits, reference bit, dirty bit." },
        { term: "TLB (Translation Lookaside Buffer)", explanation: "Fast cache storing recent page table entries. Speeds up address translation." },
        { term: "Effective Access Time", explanation: "Average memory access time considering TLB hit/miss. EAT = (TLB hit ratio × TLB access time) + (TLB miss ratio × page table access time)." },
        { term: "Virtual Memory", explanation: "Allows execution of processes not completely in memory. Program can be larger than physical memory." },
        { term: "Demand Paging", explanation: "Load pages only when needed (on demand). Lazy swapper - pages loaded on page fault." },
        { term: "Page Fault", explanation: "Reference to page not in memory. OS must bring page from disk. High overhead." },
        { term: "Valid/Invalid Bit", explanation: "In page table. Valid = page in memory. Invalid = page on disk or illegal." },
        { term: "Page Replacement", explanation: "When no free frames, select victim page to swap out. Choose page that minimizes future page faults." },
        { term: "FIFO Page Replacement", explanation: "Replace oldest page in memory. Simple but may replace frequently used page. Suffers Belady's anomaly." },
        { term: "Belady's Anomaly", explanation: "More frames → more page faults. Occurs in FIFO algorithm." },
        { term: "Optimal Page Replacement", explanation: "Replace page that won't be used for longest time. Lowest fault rate but impossible to implement (needs future knowledge)." },
        { term: "LRU (Least Recently Used)", explanation: "Replace page not used for longest time. Good approximation of optimal. Requires timestamp/counter." },
        { term: "LRU Approximation - Clock/Second Chance", explanation: "Use reference bit. Give second chance to page with reference bit = 1. Practical LRU implementation." },
        { term: "Thrashing", explanation: "Process spending more time paging than executing. Too many processes, each gets few frames." },
        { term: "Working Set", explanation: "Set of pages process is currently using. If working set doesn't fit in memory, thrashing occurs." },
        { term: "Secondary Storage", explanation: "Non-volatile storage - retains data when power off. Slower than main memory. Examples: HDD, SSD." },
        { term: "Disk Structure", explanation: "Platter → Track → Sector. Sector is smallest unit of data transfer (usually 512 bytes)." },
        { term: "Disk Scheduling", explanation: "Order of servicing disk I/O requests. Goals: Minimize seek time, maximize throughput, fairness." },
        { term: "Seek Time", explanation: "Time to move disk arm to desired cylinder. Major component of disk access time." },
        { term: "Rotational Latency", explanation: "Time for desired sector to rotate under disk head. Average = 1/2 rotation time." },
        { term: "FCFS Disk Scheduling", explanation: "Service requests in order of arrival. Fair but may cause long seek times." },
        { term: "SSTF (Shortest Seek Time First)", explanation: "Service request closest to current head position. Reduces seek time but may cause starvation." },
        { term: "SCAN (Elevator Algorithm)", explanation: "Head moves one direction, services requests, then reverses. No starvation, uniform wait time." },
        { term: "C-SCAN (Circular SCAN)", explanation: "Like SCAN but returns to start without servicing. More uniform wait time than SCAN." },
        { term: "LOOK", explanation: "Like SCAN but reverses when no more requests in that direction (doesn't go to end)." },
        { term: "C-LOOK", explanation: "Like C-SCAN but returns when no more requests (doesn't go to end)." },
        { term: "Disk Management - Formatting", explanation: "Low-level: create sectors. High-level: create file system." },
        { term: "Boot Block", explanation: "First block of disk. Contains bootstrap loader to start OS." },
        { term: "Bad Block", explanation: "Sector that cannot reliably store data. OS maintains bad block list." },
        { term: "RAID (Redundant Array of Independent Disks)", explanation: "Multiple disks working together. Provides reliability, performance, or both." },
        { term: "RAID 0 (Striping)", explanation: "Data split across multiple disks. High performance, no redundancy. One disk fails = all data lost." },
        { term: "RAID 1 (Mirroring)", explanation: "Duplicate data on two disks. High reliability, expensive (50% space wasted)." },
        { term: "RAID 5 (Distributed Parity)", explanation: "Data and parity distributed across all disks. Good performance and reliability. Can survive one disk failure." },
        { term: "RAID 6", explanation: "Like RAID 5 but with double parity. Can survive two disk failures." }
      ]
    },
    {
      unit: 5,
      title: "File System, I/O and Security",
      topics: [
        { term: "File", explanation: "Named collection of related information stored on secondary storage. Has name, data, type, attributes." },
        { term: "File Attributes", explanation: "Name, identifier, type, location, size, protection, timestamps (creation, modification, access)." },
        { term: "File Operations", explanation: "Create, write, read, seek, delete, truncate, open, close, rename." },
        { term: "File Types", explanation: "Executable, object, source code, text, multimedia, archive, etc. Indicated by extension (.txt, .exe, etc.)." },
        { term: "File Access Methods", explanation: "Sequential (read in order), Direct/Random (read any block), Indexed (index points to blocks)." },
        { term: "Directory", explanation: "Container for files and subdirectories. Organizes files. Provides naming convenience." },
        { term: "Single-Level Directory", explanation: "All files in one directory. Simple but naming problem, no grouping." },
        { term: "Two-Level Directory", explanation: "Separate directory for each user. Isolates users but no grouping within user." },
        { term: "Tree-Structured Directory", explanation: "Hierarchical structure. Efficient searching, grouping. Most common (Windows, Linux)." },
        { term: "Acyclic Graph Directory", explanation: "Allows shared files/directories. Complexity in deletion (dangling pointers)." },
        { term: "Path Name", explanation: "Absolute: from root (/home/user/file). Relative: from current directory (../file)." },
        { term: "File System Structure", explanation: "Layered: Application → Logical File System → File Organization → Basic File System → I/O Control → Devices." },
        { term: "File Allocation Methods", explanation: "How disk blocks allocated to files. Three methods: Contiguous, Linked, Indexed." },
        { term: "Contiguous Allocation", explanation: "File occupies consecutive blocks. Fast access but external fragmentation, file growth problem." },
        { term: "Linked Allocation", explanation: "Each block has pointer to next. No external fragmentation but slow random access, pointer overhead." },
        { term: "Indexed Allocation", explanation: "Index block contains pointers to all file blocks. Fast random access but index overhead, pointer waste for small files." },
        { term: "Free Space Management - Bit Vector", explanation: "Each block represented by bit. 0=free, 1=allocated. Fast but requires extra space." },
        { term: "Free Space Management - Linked List", explanation: "Free blocks linked together. No waste but slow." },
        { term: "Free Space Management - Grouping", explanation: "First free block stores addresses of n free blocks. Last block points to another group." },
        { term: "Free Space Management - Counting", explanation: "Store address of first free block and count of contiguous free blocks." },
        { term: "I/O Hardware", explanation: "Devices connected via bus. Include: storage (disk), transmission (network), human-interface (keyboard, monitor)." },
        { term: "Port", explanation: "Connection point for device to computer." },
        { term: "Bus", explanation: "Shared communication path. Types: PCI, SCSI, USB." },
        { term: "Controller", explanation: "Electronics that operate port/bus/device. Has registers for CPU communication." },
        { term: "Device Driver", explanation: "OS software that communicates with device controller. Knows device specifics." },
        { term: "I/O Methods - Programmed I/O", explanation: "CPU polls device status. Simple but CPU wastes time in busy waiting." },
        { term: "I/O Methods - Interrupt-Driven", explanation: "Device interrupts CPU when ready. CPU free to do other work. Efficient for moderate I/O." },
        { term: "I/O Methods - DMA", explanation: "Direct Memory Access. Device transfers data directly to memory without CPU. Efficient for bulk data." },
        { term: "Buffering", explanation: "Store data in memory while transferring between devices. Single, double, or circular buffer." },
        { term: "Caching", explanation: "Copy of data kept in faster storage. Speeds up access." },
        { term: "Spooling", explanation: "Simultaneous Peripheral Operations OnLine. Queue output for device (e.g., printer queue)." },
        { term: "I/O Scheduling", explanation: "Order I/O requests to improve performance, fairness. Similar to disk scheduling." },
        { term: "Security Goals - CIA", explanation: "Confidentiality (prevent unauthorized read), Integrity (prevent unauthorized write), Availability (service available when needed)." },
        { term: "Protection", explanation: "Internal mechanism controlling access of processes to resources." },
        { term: "Security", explanation: "Defense against external and internal attacks." },
        { term: "Threats - Trojan Horse", explanation: "Program with hidden malicious function. Appears legitimate." },
        { term: "Threats - Virus", explanation: "Code fragment embedded in legitimate program. Replicates by infecting other files." },
        { term: "Threats - Worm", explanation: "Standalone program that replicates itself. Spreads across network." },
        { term: "Threats - Denial of Service (DoS)", explanation: "Prevent legitimate use of system by overwhelming resources." },
        { term: "Authentication", explanation: "Verifying identity of user. Methods: passwords, biometrics, tokens." },
        { term: "Access Control", explanation: "Limiting who can do what. Use access control lists or capability lists." },
        { term: "Access Matrix", explanation: "Rows=domains (users), Columns=objects (files), Cells=access rights (read, write, execute)." },
        { term: "Access Control List (ACL)", explanation: "List attached to object specifying users and their access rights. Column of access matrix." },
        { term: "Capability List", explanation: "List attached to user specifying objects they can access and how. Row of access matrix." },
        { term: "Encryption", explanation: "Transform data to unreadable form using key. Plaintext → Ciphertext." },
        { term: "Symmetric Encryption", explanation: "Same key for encryption and decryption. Fast but key distribution problem. Example: AES, DES." },
        { term: "Asymmetric Encryption", explanation: "Public key encrypts, private key decrypts. Slow but secure key distribution. Example: RSA." },
        { term: "Firewall", explanation: "Network security system monitoring incoming/outgoing traffic. Blocks unauthorized access." },
        { term: "Intrusion Detection System (IDS)", explanation: "Monitors system for malicious activity or policy violations. Alerts administrator." },
        { term: "Virtualization", explanation: "Creating virtual version of hardware platform, OS, storage, or network. Multiple VMs on single physical machine." },
        { term: "Hypervisor/VMM", explanation: "Software managing virtual machines. Type 1 (bare metal), Type 2 (hosted on OS)." },
        { term: "Type 1 Hypervisor", explanation: "Runs directly on hardware. Better performance. Examples: VMware ESXi, Hyper-V." },
        { term: "Type 2 Hypervisor", explanation: "Runs on host OS. Easier to use. Examples: VirtualBox, VMware Workstation." },
        { term: "Benefits of Virtualization", explanation: "Server consolidation, isolation, testing, cloud computing, resource utilization, cost reduction." },
        { term: "Cloud Computing", explanation: "Delivering computing services over internet. IaaS, PaaS, SaaS models." }
      ]
    }
  ];

  const toggleUnit = (unitNum) => {
    setExpandedUnit(expandedUnit === unitNum ? null : unitNum);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12 text-indigo-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Operating Systems - CSE3003</h1>
              <p className="text-lg text-gray-600 mt-2">Complete Exam Notes - All 5 Units</p>
            </div>
          </div>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-lg">
            <p className="text-indigo-900 font-semibold">📚 Study Tips for Weak Students:</p>
            <ul className="text-indigo-800 mt-2 space-y-1 text-sm">
              <li>✓ Focus on definitions and key points (left column = exam keywords)</li>
              <li>✓ Read explanations 2-3 times for clarity (right column = answer format)</li>
              <li>✓ Memorize one unit at a time - don't rush through everything</li>
              <li>✓ Practice writing answers using the explanations provided</li>
            </ul>
          </div>
        </div>

        {/* Units */}
        {units.map((unit) => (
          <div key={unit.unit} className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
            {/* Unit Header */}
            <button
              onClick={() => toggleUnit(unit.unit)}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 flex items-center justify-between hover:from-indigo-700 hover:to-blue-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold bg-white text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center">
                  {unit.unit}
                </span>
                <div className="text-left">
                  <h2 className="text-2xl font-bold">Unit {unit.unit}</h2>
                  <p className="text-indigo-100 text-sm mt-1">{unit.title}</p>
                </div>
              </div>
              {expandedUnit === unit.unit ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            {/* Unit Content */}
            {expandedUnit === unit.unit && (
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-indigo-50">
                        <th className="border-2 border-indigo-200 p-4 text-left font-bold text-indigo-900 w-1/3">
                          Term / Keyword / Topic
                        </th>
                        <th className="border-2 border-indigo-200 p-4 text-left font-bold text-indigo-900 w-2/3">
                          Explanation (Write this in exam)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {unit.topics.map((topic, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border-2 border-gray-200 p-4 font-semibold text-gray-800 align-top">
                            {topic.term}
                          </td>
                          <td className="border-2 border-gray-200 p-4 text-gray-700">
                            {topic.explanation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-900 font-semibold">
                    ✅ Unit {unit.unit} Complete - {unit.topics.length} topics covered
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Exam Writing Strategy</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="font-bold text-yellow-900 mb-2">For 2-mark questions:</p>
              <p className="text-yellow-800 text-sm">Write the definition/explanation directly from right column (2-3 lines max)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-900 mb-2">For 5-mark questions:</p>
              <p className="text-blue-800 text-sm">Combine 2-3 related topics, add examples if you remember any</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-900 mb-2">For 10-mark questions:</p>
              <p className="text-purple-800 text-sm">Cover 5-7 related topics with all explanations + draw diagrams if applicable</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-red-900 mb-2">Important:</p>
              <p className="text-red-800 text-sm">Don't skip units! Every unit is equally important. Cover all 5 units.</p>
            </div>
          </div>
        </div>

        {/* Print-friendly note */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>💡 Tip: You can print this page or save as PDF for offline study</p>
          <p className="mt-2 font-semibold text-indigo-600">Total Topics Covered: {units.reduce((sum, unit) => sum + unit.topics.length, 0)}</p>
        </div>
      </div>
    </div>
  );
};

export default OSExamNotes;

