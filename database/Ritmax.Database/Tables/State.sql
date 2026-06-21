CREATE TABLE [dbo].[State]
(
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]      NVARCHAR (100) NOT NULL,
    [CreatedAt] DATETIME2 (7)  NOT NULL CONSTRAINT [DF_State_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt] DATETIME2 (7)  NULL,
    [IsDeleted] BIT            NOT NULL CONSTRAINT [DF_State_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_State] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UQ_State_Name] UNIQUE ([Name])
);
