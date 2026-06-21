/*
    Idempotent seed data for lookup tables.
    Safe to run on every deployment - rows are inserted/updated via MERGE
    and existing rows are never duplicated.
*/
SET NOCOUNT ON;

-- Industries (lookup table)
SET IDENTITY_INSERT [dbo].[Industries] ON;

MERGE INTO [dbo].[Industries] AS [Target]
USING (VALUES
    (1, N'IT / Software Services'),
    (2, N'Finance'),
    (3, N'Healthcare'),
    (4, N'Manufacturing'),
    (5, N'Retail'),
    (6, N'Education'),
    (7, N'Construction'),
    (8, N'Telecommunications')
) AS [Source] ([Id], [Name])
ON [Target].[Id] = [Source].[Id]
WHEN MATCHED AND ([Target].[Name] <> [Source].[Name] OR [Target].[IsDeleted] <> 0) THEN
    UPDATE SET [Target].[Name] = [Source].[Name],
               [Target].[IsDeleted] = 0,
               [Target].[UpdatedAt] = SYSUTCDATETIME()
WHEN NOT MATCHED BY TARGET THEN
    INSERT ([Id], [Name], [CreatedAt], [IsDeleted])
    VALUES ([Source].[Id], [Source].[Name], SYSUTCDATETIME(), 0);

SET IDENTITY_INSERT [dbo].[Industries] OFF;

-- States (lookup table)
SET IDENTITY_INSERT [dbo].[State] ON;

MERGE INTO [dbo].[State] AS [Target]
USING (VALUES
    (1, N'Andhra Pradesh'),
    (2, N'Arunachal Pradesh'),
    (3, N'Assam'),
    (4, N'Bihar'),
    (5, N'Chhattisgarh'),
    (6, N'Goa'),
    (7, N'Gujarat'),
    (8, N'Haryana'),
    (9, N'Himachal Pradesh'),
    (10, N'Jharkhand'),
    (11, N'Karnataka'),
    (12, N'Kerala'),
    (13, N'Madhya Pradesh'),
    (14, N'Maharashtra'),
    (15, N'Manipur'),
    (16, N'Meghalaya'),
    (17, N'Mizoram'),
    (18, N'Nagaland'),
    (19, N'Odisha'),
    (20, N'Punjab'),
    (21, N'Rajasthan'),
    (22, N'Sikkim'),
    (23, N'Tamil Nadu'),
    (24, N'Telangana'),
    (25, N'Tripura'),
    (26, N'Uttar Pradesh'),
    (27, N'Uttarakhand'),
    (28, N'West Bengal'),
    (29, N'Andaman and Nicobar Islands'),
    (30, N'Chandigarh'),
    (31, N'Dadra and Nagar Haveli and Daman and Diu'),
    (32, N'Delhi'),
    (33, N'Jammu and Kashmir'),
    (34, N'Ladakh'),
    (35, N'Lakshadweep'),
    (36, N'Puducherry')
) AS [Source] ([Id], [Name])
ON [Target].[Id] = [Source].[Id]
WHEN MATCHED AND ([Target].[Name] <> [Source].[Name] OR [Target].[IsDeleted] <> 0) THEN
    UPDATE SET [Target].[Name] = [Source].[Name],
               [Target].[IsDeleted] = 0,
               [Target].[UpdatedAt] = SYSUTCDATETIME()
WHEN NOT MATCHED BY TARGET THEN
    INSERT ([Id], [Name], [CreatedAt], [IsDeleted])
    VALUES ([Source].[Id], [Source].[Name], SYSUTCDATETIME(), 0);

SET IDENTITY_INSERT [dbo].[State] OFF;

-- Bootstrap admin login (idempotent).
-- Ensures a company, department and a SuperAdmin employee exist so the app
-- has a working login after a fresh deploy.
-- Default credentials: username "admin" / password "Admin@123".
-- IMPORTANT: change this password after first login.
IF NOT EXISTS (SELECT 1 FROM [dbo].[Employee] WHERE [Username] = N'admin' AND [IsDeleted] = 0)
BEGIN
    DECLARE @CompanyId INT = (SELECT TOP (1) [Id] FROM [dbo].[Company] WHERE [IsDeleted] = 0 ORDER BY [Id]);

    IF @CompanyId IS NULL
    BEGIN
        INSERT INTO [dbo].[Company] ([Name], [Gstin], [Pan], [Address], [City], [PhoneNo], [IndustryId], [StateId])
        VALUES (N'RITMAX', N'00AAAAA0000A0Z0', N'AAAAA0000A', N'Hyderabad', N'Hyderabad', N'0000000000', 1, 24);

        SET @CompanyId = SCOPE_IDENTITY();
    END

    DECLARE @DepartmentId INT =
        (SELECT TOP (1) [Id] FROM [dbo].[Departments] WHERE [CompanyId] = @CompanyId AND [IsDeleted] = 0 ORDER BY [Id]);

    IF @DepartmentId IS NULL
    BEGIN
        INSERT INTO [dbo].[Departments] ([CompanyId], [Name], [Description])
        VALUES (@CompanyId, N'Administration', N'System administration');

        SET @DepartmentId = SCOPE_IDENTITY();
    END

    INSERT INTO [dbo].[Employee]
    (
        [CompanyId], [EmployeeCode], [FirstName], [LastName], [Email],
        [JoinDate], [DepartmentId], [Designation], [EmploymentType], [Status],
        [BaseSalary], [PayFrequency], [Role], [Username], [PasswordHash],
        [IsActive], [IsPasswordUpdated], [CreatedBy]
    )
    VALUES
    (
        @CompanyId, N'ADMIN001', N'System', N'Administrator', N'admin@ritmax.in',
        CAST(SYSUTCDATETIME() AS DATE), @DepartmentId, N'Administrator', 1, 0,
        0, 1, 1, N'admin', N'$2a$12$dUk2DFsCCPFmTDw7L1MipeFyG/ZLGODsMxVo/TwHi1oeNSMMNrpsC',
        1, 0, N'SeedData'
    );
END
