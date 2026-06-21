CREATE TABLE [dbo].[AttendanceRecords]
(
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [EmployeeId] INT           NOT NULL,
    [Date]       DATE          NOT NULL,
    [Status]     NVARCHAR (50) NOT NULL,
    [CheckIn]    TIME (7)      NULL,
    [CheckOut]   TIME (7)      NULL,
    [CreatedAt]  DATETIME2 (7) NOT NULL CONSTRAINT [DF_AttendanceRecords_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]  DATETIME2 (7) NULL,
    [IsDeleted]  BIT           NOT NULL CONSTRAINT [DF_AttendanceRecords_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_AttendanceRecords] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_AttendanceRecords_Employee] FOREIGN KEY ([EmployeeId]) REFERENCES [dbo].[Employee] ([Id])
);
