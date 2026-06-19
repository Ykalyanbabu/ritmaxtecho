CREATE TABLE [dbo].[LeaveRequests]
(
    [Id]         INT            IDENTITY (1, 1) NOT NULL,
    [EmployeeId] INT            NOT NULL,
    [StartDate]  DATE           NOT NULL,
    [EndDate]    DATE           NOT NULL,
    [LeaveType]  NVARCHAR (50)  NOT NULL,
    [Status]     NVARCHAR (50)  NOT NULL,
    [Reason]     NVARCHAR (500) NULL,
    [CreatedAt]  DATETIME2 (7)  NOT NULL CONSTRAINT [DF_LeaveRequests_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]  DATETIME2 (7)  NULL,
    [IsDeleted]  BIT            NOT NULL CONSTRAINT [DF_LeaveRequests_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_LeaveRequests] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_LeaveRequests_Employees] FOREIGN KEY ([EmployeeId]) REFERENCES [dbo].[Employees] ([Id])
);
