CREATE TABLE [dbo].[Employee]
(
    [Id]                 INT              IDENTITY (1, 1) NOT NULL,
    [CompanyId]          INT              NOT NULL,
    [EmployeeCode]       NVARCHAR (20)    NOT NULL,

    -- Personal Information
    [FirstName]          NVARCHAR (100)   NOT NULL,
    [LastName]           NVARCHAR (100)   NOT NULL,
    [Email]              NVARCHAR (256)   NOT NULL,
    [Phone]              NVARCHAR (20)    NULL,
    [DateOfBirth]        DATE             NULL,
    [Gender]             TINYINT          NULL,            -- 1=Male,2=Female,3=Other
    [City]               NVARCHAR (100)   NULL,
    [StateId]            INT              NULL,
    [PinCode]            INT              NULL,
    [Address]            NVARCHAR (500)   NULL,

    -- Employment Details
    [JoinDate]           DATE             NOT NULL,
    [DepartmentId]       INT              NOT NULL,
    [Designation]        NVARCHAR (100)   NOT NULL,
    [Grade]              NVARCHAR (10)    NULL,
    [EmploymentType]     TINYINT          NOT NULL,        -- 1=Full-time,2=Part-time,3=Contract,4=Intern
    [ReportingManagerId] INT              NULL,
    [Status]             TINYINT          NOT NULL,        -- maps EmployeeStatus enum

    -- Compensation & statutory
    [BaseSalary]         DECIMAL (18, 2)  NOT NULL,
    [PayFrequency]       TINYINT          NOT NULL,        -- 1=Monthly,2=Bi-weekly,3=Weekly
    [Pan]                NVARCHAR (10)    NULL,
    [Aadhaar]            NVARCHAR (12)    NULL,            -- sensitive: encrypt at rest
    [Uan]                NVARCHAR (12)    NULL,
    [PfNumber]           NVARCHAR (100)   NULL,
    [EsiNumber]          NVARCHAR (100)   NULL,

    -- Bank details
    [BankName]           NVARCHAR (100)   NULL,
    [AccountNumber]      NVARCHAR (20)    NULL,
    [IfscCode]           NVARCHAR (11)    NULL,

    -- Files
    [PhotoPath]          NVARCHAR (400)   NULL,

    -- Role & login
    [Role]               TINYINT          NOT NULL,        -- 1=SuperAdmin,2=Admin,3=Employee
    [Username]           NVARCHAR (100)   NULL,
    [PasswordHash]       NVARCHAR (256)   NULL,
    [IsActive]           BIT              NOT NULL CONSTRAINT [DF_Employee_IsActive] DEFAULT (1),
    [IsPasswordUpdated]  BIT              NOT NULL CONSTRAINT [DF_Employee_IsPasswordUpdated] DEFAULT (0),

    -- Audit
    [CreatedBy]          NVARCHAR (100)   NULL,
    [CreatedDate]        DATETIME2 (7)    NOT NULL CONSTRAINT [DF_Employee_CreatedDate] DEFAULT (SYSUTCDATETIME()),
    [ModifiedBy]         NVARCHAR (100)   NULL,
    [ModifiedDate]       DATETIME2 (7)    NULL,
    [UpdateTag]          NVARCHAR (50)    NULL,
    [UpdateGuid]         UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF_Employee_UpdateGuid] DEFAULT (NEWID()),
    [IsDeleted]          BIT              NOT NULL CONSTRAINT [DF_Employee_IsDeleted] DEFAULT (0),

    CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Employee_Company]     FOREIGN KEY ([CompanyId])          REFERENCES [dbo].[Company] ([Id]),
    CONSTRAINT [FK_Employee_Departments] FOREIGN KEY ([DepartmentId])       REFERENCES [dbo].[Departments] ([Id]),
    CONSTRAINT [FK_Employee_State]       FOREIGN KEY ([StateId])            REFERENCES [dbo].[State] ([Id]),
    CONSTRAINT [FK_Employee_Manager]     FOREIGN KEY ([ReportingManagerId]) REFERENCES [dbo].[Employee] ([Id])
);
GO

CREATE UNIQUE NONCLUSTERED INDEX [UX_Employee_Company_Code]
    ON [dbo].[Employee] ([CompanyId], [EmployeeCode]) WHERE [IsDeleted] = 0;
GO

CREATE UNIQUE NONCLUSTERED INDEX [UX_Employee_Company_Email]
    ON [dbo].[Employee] ([CompanyId], [Email]) WHERE [IsDeleted] = 0;
GO

CREATE UNIQUE NONCLUSTERED INDEX [UX_Employee_Username]
    ON [dbo].[Employee] ([Username]) WHERE [Username] IS NOT NULL AND [IsDeleted] = 0;
GO
